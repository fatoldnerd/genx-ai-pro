"use client";

import { useMemo, useState } from "react";
import { allTasks, getTask, rolePresets, taskCategories, type RolePreset } from "./calculator-data";

type Step = "role" | "tasks" | "results";
type HoursByTask = Record<string, number>;

type TaskResult = {
  taskId: string;
  taskName: string;
  currentHoursWeek: number;
  remainingHoursWeek: number;
  savingsPercent: number;
  savedHoursYear: number;
  savedMoneyYear: number;
};

type Result = {
  totalSavedHoursWeek: number;
  totalSavedHoursYear: number;
  totalSavedMoneyYear: number;
  percentTimeSaved: number;
  savedDaysYear: number;
  taskResults: TaskResult[];
  categoryBreakdown: { name: string; marker: string; savedHoursYear: number; savedMoneyYear: number }[];
  teamSavedHoursYear: number;
  teamSavedMoneyYear: number;
  paybackDays: number;
  annualROIMultiple: number;
};

const money = (value: number) => `£${Math.round(value).toLocaleString("en-GB")}`;

function Spark() {
  return (
    <svg aria-hidden="true" className="spark" viewBox="0 0 24 24" fill="none">
      <path d="M12 1c.4 7.3 3.7 10.6 11 11-7.3.4-10.6 3.7-11 11C11.6 15.7 8.3 12.4 1 12 8.3 11.6 11.6 8.3 12 1Z" fill="currentColor" />
    </svg>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 20 20" fill="none">
      <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h14m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="https://genxaipro.com" aria-label="GenX AI Pro home">
      <span className="brand-mark"><Spark /></span>
      <span>GEN<span className="brand-x">X</span> AI PRO</span>
    </a>
  );
}

function Progress({ step }: { step: Step }) {
  const active = step === "role" ? 1 : step === "tasks" ? 2 : 3;
  return (
    <div className="progress" aria-label={`Step ${active} of 3`}>
      {["Context", "Work", "Value"].map((label, index) => (
        <div className={index + 1 <= active ? "progress-item active" : "progress-item"} key={label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <i />
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}

function RoleGroup({
  title,
  roles,
  selectedRole,
  onSelect,
}: {
  title: string;
  roles: RolePreset[];
  selectedRole: string;
  onSelect: (role: RolePreset) => void;
}) {
  return (
    <section className="role-group">
      <div className="group-heading"><span>{title}</span><span>{String(roles.length).padStart(2, "0")}</span></div>
      <div className="role-grid">
        {roles.map((role) => (
          <button
            type="button"
            className={selectedRole === role.id ? "role-option selected" : "role-option"}
            onClick={() => onSelect(role)}
            aria-pressed={selectedRole === role.id}
            key={role.id}
          >
            <span className="role-select" aria-hidden="true" />
            <strong>{role.name}</strong>
            <small>Typical package {money(role.defaultSalary)}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Calculator() {
  const [step, setStep] = useState<Step>("role");
  const [selectedRole, setSelectedRole] = useState("");
  const [salary, setSalary] = useState(80000);
  const [teamSize, setTeamSize] = useState(1);
  const [hours, setHours] = useState<HoursByTask>(() => Object.fromEntries(allTasks.map((task) => [task.id, task.defaultHoursPerWeek])));
  const [result, setResult] = useState<Result | null>(null);

  const weeklyHours = useMemo(() => Object.values(hours).reduce((total, value) => total + value, 0), [hours]);
  const roleName = rolePresets.find((role) => role.id === selectedRole)?.name;

  const goTo = (next: Step) => {
    setStep(next);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const chooseRole = (role: RolePreset) => {
    setSelectedRole(role.id);
    setSalary(role.defaultSalary);
    if (Object.keys(role.taskOverrides).length > 0) {
      setHours(Object.fromEntries(allTasks.map((task) => [task.id, role.taskOverrides[task.id] ?? 0])));
    } else {
      setHours(Object.fromEntries(allTasks.map((task) => [task.id, task.defaultHoursPerWeek])));
    }
  };

  const calculate = () => {
    const hourlyRate = salary / 1920;
    const taskResults = Object.entries(hours)
      .filter(([, value]) => value > 0)
      .map(([taskId, currentHoursWeek]) => {
        const task = getTask(taskId);
        if (!task) return null;
        const savedHoursWeek = currentHoursWeek * (task.aiSavingsPercent / 100);
        const savedHoursYear = savedHoursWeek * 48;
        return {
          taskId,
          taskName: task.name,
          currentHoursWeek,
          remainingHoursWeek: currentHoursWeek - savedHoursWeek,
          savingsPercent: task.aiSavingsPercent,
          savedHoursYear,
          savedMoneyYear: savedHoursYear * hourlyRate,
        };
      })
      .filter((item): item is TaskResult => item !== null)
      .sort((a, b) => b.savedHoursYear - a.savedHoursYear);

    const totalCurrentHoursWeek = taskResults.reduce((total, task) => total + task.currentHoursWeek, 0);
    const totalSavedHoursYear = taskResults.reduce((total, task) => total + task.savedHoursYear, 0);
    const totalSavedMoneyYear = taskResults.reduce((total, task) => total + task.savedMoneyYear, 0);
    const totalSavedHoursWeek = totalSavedHoursYear / 48;

    const categoryBreakdown = taskCategories
      .map((category) => {
        const categoryIds = new Set(category.tasks.map((task) => task.id));
        const categoryTasks = taskResults.filter((task) => categoryIds.has(task.taskId));
        return {
          name: category.name,
          marker: category.marker,
          savedHoursYear: categoryTasks.reduce((total, task) => total + task.savedHoursYear, 0),
          savedMoneyYear: categoryTasks.reduce((total, task) => total + task.savedMoneyYear, 0),
        };
      })
      .filter((category) => category.savedHoursYear > 0);

    setResult({
      totalSavedHoursWeek,
      totalSavedHoursYear,
      totalSavedMoneyYear,
      percentTimeSaved: totalCurrentHoursWeek > 0 ? (totalSavedHoursWeek / totalCurrentHoursWeek) * 100 : 0,
      savedDaysYear: totalSavedHoursYear / 8,
      taskResults,
      categoryBreakdown,
      teamSavedHoursYear: totalSavedHoursYear * teamSize,
      teamSavedMoneyYear: totalSavedMoneyYear * teamSize,
      paybackDays: totalSavedMoneyYear > 0 ? Math.ceil(500 / (totalSavedMoneyYear / 240)) : 999,
      annualROIMultiple: totalSavedMoneyYear / 500,
    });
    goTo("results");
  };

  const back = () => {
    if (step === "tasks") goTo("role");
    if (step === "results") goTo("tasks");
  };

  return (
    <>
      <a className="skip-link" href="#calculator-main">Skip to calculator</a>
      <header className="site-header">
        <Brand />
        <span className="header-label">Practical tools / ROI calculator</span>
        <div className="header-actions">
          {step !== "role" && <button type="button" className="back-link" onClick={back}>← Back</button>}
          <a className="site-link" href="https://genxaipro.com/tools">All tools <Arrow diagonal /></a>
        </div>
      </header>

      <main id="calculator-main">
        <div className="calculator-shell">
          <Progress step={step} />

          {step === "role" && (
            <div className="step-view reveal">
              <section className="calculator-hero">
                <div className="hero-copy">
                  <div className="eyebrow"><span className="status-dot" />AI opportunity model / Free to use</div>
                  <h1>What could AI<span>be worth?</span></h1>
                  <p>Choose the context closest to your work. We will turn your time, tasks and team size into a practical estimate—not a promise dressed up as a forecast.</p>
                </div>
                <aside className="model-map" aria-label="How the calculator works">
                  <span className="map-label">VALUE MODEL / 01</span>
                  <div className="map-axis" />
                  <div className="map-ring ring-outer" />
                  <div className="map-ring ring-inner" />
                  <strong>TIME<br />× VALUE</strong>
                  <span className="map-node node-a">ROLE</span>
                  <span className="map-node node-b">TASKS</span>
                  <span className="map-node node-c">TEAM</span>
                </aside>
              </section>

              <div className="role-section-heading">
                <div><span>01 / Your context</span><h2>Select the role that fits best.</h2></div>
                <p>This gives us a sensible starting point. You can adjust every assumption before calculating the opportunity.</p>
              </div>

              <RoleGroup title="Individual contributors" roles={rolePresets.filter((role) => role.group === "individual")} selectedRole={selectedRole} onSelect={chooseRole} />
              <RoleGroup title="Leaders" roles={rolePresets.filter((role) => role.group === "leader")} selectedRole={selectedRole} onSelect={chooseRole} />
              <RoleGroup title="Other" roles={rolePresets.filter((role) => role.group === "other")} selectedRole={selectedRole} onSelect={chooseRole} />

              {selectedRole && (
                <section className="assumptions reveal" aria-label="Starting assumptions">
                  <div className="assumptions-intro">
                    <span>Starting assumptions</span>
                    <h2>Make the model yours.</h2>
                    <p>We use total annual employment cost as a practical proxy for the value of time.</p>
                  </div>
                  <div className="range-fields">
                    <label className="range-field">
                      <span><strong>Annual salary / package</strong><output>{money(salary)}</output></span>
                      <input type="range" min="30000" max="300000" step="5000" value={salary} onChange={(event) => setSalary(Number(event.target.value))} style={{ "--range-progress": `${((salary - 30000) / 270000) * 100}%` } as React.CSSProperties} />
                      <small><span>£30K</span><span>£300K</span></small>
                    </label>
                    <label className="range-field">
                      <span><strong>Team size <em>including you</em></strong><output>{teamSize}</output></span>
                      <input type="range" min="1" max="50" step="1" value={teamSize} onChange={(event) => setTeamSize(Number(event.target.value))} style={{ "--range-progress": `${((teamSize - 1) / 49) * 100}%` } as React.CSSProperties} />
                      <small><span>Just me</span><span>50 people</span></small>
                    </label>
                  </div>
                </section>
              )}

              {selectedRole && (
                <div className="next-row reveal">
                  <p><span>Next</span> Review the working-week assumptions for {roleName}.</p>
                  <button type="button" className="button button-primary" onClick={() => goTo("tasks")}>Set your hours <Arrow /></button>
                </div>
              )}
            </div>
          )}

          {step === "tasks" && (
            <div className="step-view reveal">
              <section className="step-intro">
                <div><span>02 / Your work</span><h1>Where does the<span>week go?</span></h1></div>
                <p>Adjust the hours you spend on each activity. Honest inputs create a more useful result; zero out anything that does not belong in your week.</p>
              </section>

              <div className="hours-summary">
                <div><span>Weekly total</span><strong className={weeklyHours > 50 ? "hours-high" : weeklyHours > 40 ? "hours-mid" : ""}>{weeklyHours}h</strong><small>/ week</small></div>
                <p>{roleName} · {money(salary)} package {teamSize > 1 ? `· ${teamSize} people` : "· individual view"}</p>
                <button type="button" className="button button-primary button-small" onClick={calculate}>Calculate value <Arrow /></button>
              </div>

              <div className="task-list">
                {taskCategories.map((category, categoryIndex) => (
                  <article className="task-category" key={category.id}>
                    <header>
                      <span className="category-marker">{category.marker}</span>
                      <div><small>{String(categoryIndex + 1).padStart(2, "0")}</small><h2>{category.name}</h2></div>
                      <span>{category.tasks.length} activities</span>
                    </header>
                    <div className="task-rows">
                      {category.tasks.map((task) => {
                        const value = hours[task.id] ?? 0;
                        return (
                          <label className="task-row" key={task.id}>
                            <div className="task-copy"><strong>{task.name}</strong><small>{task.description}</small></div>
                            <div className="task-potential"><span>{task.aiSavingsPercent}% potential</span><small>{task.aiMaturity} use case</small></div>
                            <div className="task-control">
                              <output>{value}<small>h/wk</small></output>
                              <input type="range" min="0" max="15" step="0.5" value={value} onChange={(event) => setHours((current) => ({ ...current, [task.id]: Number(event.target.value) }))} style={{ "--range-progress": `${(value / 15) * 100}%` } as React.CSSProperties} />
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>

              <div className="calculate-row">
                <div><span>Ready when you are</span><h2>Turn the working week into a value case.</h2></div>
                <button type="button" className="button button-primary" onClick={calculate}>Calculate my AI ROI <Arrow /></button>
              </div>
            </div>
          )}

          {step === "results" && result && (
            <div className="step-view reveal">
              <section className="result-hero">
                <div className="result-title">
                  <div className="eyebrow"><span className="status-dot" />03 / Your opportunity</div>
                  <h1>Your value<span>signal.</span></h1>
                  <p>An evidence-based estimate using your inputs and practical benchmarks for AI-assisted work.</p>
                </div>
                <div className="result-value">
                  <span>Estimated annual value</span>
                  <strong>{money(result.totalSavedMoneyYear)}</strong>
                  <small>{teamSize > 1 ? "Your individual opportunity" : "Based on your current working week"}</small>
                </div>
              </section>

              <section className="metric-band" aria-label="Headline results">
                <article><span>Hours / week</span><strong>{result.totalSavedHoursWeek.toFixed(1)}h</strong><small>potentially reclaimed</small></article>
                <article><span>Days / year</span><strong>{Math.round(result.savedDaysYear)}</strong><small>returned to higher-value work</small></article>
                <article><span>Time reclaimed</span><strong>{Math.round(result.percentTimeSaved)}%</strong><small>across selected activities</small></article>
                <article><span>Indicative payback</span><strong>{result.paybackDays} days</strong><small>against a £500 working session</small></article>
              </section>

              {teamSize > 1 && (
                <section className="team-impact">
                  <div><span>Team view / {teamSize} people</span><h2>The opportunity becomes material at scale.</h2></div>
                  <div className="team-metric"><strong>{money(result.teamSavedMoneyYear)}</strong><span>estimated annual value</span></div>
                  <div className="team-metric"><strong>{Math.round(result.teamSavedHoursYear).toLocaleString("en-GB")}h</strong><span>team hours per year</span></div>
                </section>
              )}

              <div className="result-grid">
                <section className="breakdown-panel">
                  <div className="panel-heading"><span>Value by category</span><span>Annual estimate</span></div>
                  <div className="breakdown-list">
                    {result.categoryBreakdown.map((category) => {
                      const max = Math.max(...result.categoryBreakdown.map((item) => item.savedMoneyYear));
                      return (
                        <div className="breakdown-row" key={category.name}>
                          <span className="category-marker">{category.marker}</span>
                          <div><strong>{category.name}</strong><span className="bar"><i style={{ width: `${(category.savedMoneyYear / max) * 100}%` }} /></span></div>
                          <small>{Math.round(category.savedHoursYear)}h</small>
                          <output>{money(category.savedMoneyYear)}</output>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="opportunity-panel">
                  <div className="panel-heading"><span>Highest-value activities</span><span>Top five</span></div>
                  <ol>
                    {result.taskResults.slice(0, 5).map((task) => (
                      <li key={task.taskId}>
                        <span>{task.taskName}<small>{task.currentHoursWeek}h → {task.remainingHoursWeek.toFixed(1)}h / week</small></span>
                        <strong>{money(task.savedMoneyYear)}<small>{Math.round(task.savedHoursYear)}h / year</small></strong>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <section className="result-explain">
                <div>
                  <span>What this means</span>
                  <h2>A useful signal—not a guaranteed saving.</h2>
                </div>
                <p>The model applies conservative task-level benchmarks to the working pattern you supplied. Real value depends on tool choice, workflow design, adoption and how reclaimed time is used.</p>
                <div className="roi-note"><span>Indicative annual return</span><strong>{Math.round(result.annualROIMultiple)}×</strong><small>against one £500 AI working session</small></div>
              </section>

              <section className="result-actions">
                <div><span>Your next useful move</span><h2>Turn the estimate into an operating plan.</h2><p>Bring the result to a free 15-minute AI audit. We will pressure-test the opportunity and identify the strongest place to begin.</p></div>
                <div className="action-links">
                  <a className="button button-primary" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Discuss the result <Arrow /></a>
                  <a className="text-link" href="https://assessment.genxaipro.com" target="_blank" rel="noreferrer">Take the readiness assessment <Arrow diagonal /></a>
                </div>
              </section>

              <p className="method-note">Projections use industry benchmarks for AI-assisted workflows. Actual savings vary by implementation, adoption and context.</p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <Brand />
        <p>Applied AI consultancy for experienced leaders and ambitious teams.</p>
        <div><a href="https://genxaipro.com/tools">Free tools</a><a href="https://genxaipro.com/about">About Brad</a><a href="https://www.linkedin.com/in/bradtowers/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <small>© 2026 GenX AI Pro · Practical AI. Useful progress.</small>
      </footer>
    </>
  );
}
