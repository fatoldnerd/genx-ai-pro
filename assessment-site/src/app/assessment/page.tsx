'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import { Brand } from '@/components/brand';

const DIMENSION_ORDER = ['fluency', 'workflow', 'architecture', 'framing', 'strategic'];
const DIMENSION_LABELS: Record<string, string> = {
  fluency: 'AI Fluency',
  workflow: 'Workflow Integration',
  architecture: 'Tool Architecture',
  framing: 'Problem Framing',
  strategic: 'Strategic Thinking',
};

export default function AssessmentPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(25).fill(0));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleOptionSelect = (score: number) => {
    if (isTransitioning) return;
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (selectedOption === null || isTransitioning) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);

    if (isLastQuestion) {
      localStorage.setItem('ai_assessment_answers', JSON.stringify(newAnswers));
      router.push('/results');
      return;
    }

    setIsTransitioning(true);
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 280);
  };

  const handleBack = () => {
    if (currentIndex === 0 || isTransitioning) return;

    setIsTransitioning(true);
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(answers[currentIndex - 1] || null);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 280);
  };

  // Dimension progress
  const currentDimensionIndex = DIMENSION_ORDER.indexOf(currentQuestion.dimension);
  const questionInDimension = (currentIndex % 5) + 1;

  return (
    <main
      className="assessment-flow flex flex-col"
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full"
        style={{
          backgroundColor: 'rgba(243, 246, 245, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <Brand />
        <span
          className="text-sm font-medium tabular-nums font-mono-nums"
          style={{ color: '#64767a' }}
        >
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-0.5 mx-auto max-w-3xl px-6"
        style={{ backgroundColor: 'rgba(17,42,51,0.06)' }}
      >
        <div
          className="h-full rounded-full progress-bar-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: '#3165e8',
          }}
        />
      </div>

      {/* Dimension pills */}
      <div className="flex gap-2 px-6 pt-6 pb-2 max-w-3xl mx-auto w-full overflow-x-auto">
        {DIMENSION_ORDER.map((dim, i) => {
          const isActive = dim === currentQuestion.dimension;
          const isDone = i < currentDimensionIndex;
          return (
            <div
              key={dim}
              className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
              style={{
                backgroundColor: isActive
                  ? 'rgba(49, 101, 232, 0.15)'
                  : isDone
                  ? 'rgba(49, 101, 232, 0.05)'
                  : 'rgba(17,42,51,0.04)',
                border: `1px solid ${
                  isActive
                    ? 'rgba(49, 101, 232, 0.4)'
                    : isDone
                    ? 'rgba(49, 101, 232, 0.15)'
                    : 'rgba(17,42,51,0.06)'
                }`,
                color: isActive
                  ? '#3165e8'
                  : isDone
                  ? 'rgba(49, 101, 232, 0.6)'
                  : '#64767a',
              }}
            >
              {isDone && '✓ '}{DIMENSION_LABELS[dim]}
            </div>
          );
        })}
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col px-6 py-6 max-w-3xl mx-auto w-full">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
          }}
        >
          {/* Question number in dimension */}
          <p
            className="text-xs uppercase tracking-widest font-medium mb-4"
            style={{ color: '#64767a' }}
          >
            {DIMENSION_LABELS[currentQuestion.dimension]} · Question {questionInDimension} of 5
          </p>

          {/* Question text */}
          <h2
            className="text-xl sm:text-2xl font-semibold leading-snug mb-8"
            style={{ color: '#112a33' }}
          >
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option.score;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option.score)}
                  className="text-left p-4 sm:p-5 rounded-xl transition-all duration-200 cursor-pointer group w-full"
                  style={{
                    backgroundColor: isSelected
                      ? 'rgba(49, 101, 232, 0.12)'
                      : '#ffffff',
                    border: `1px solid ${
                      isSelected
                        ? 'rgba(49, 101, 232, 0.5)'
                        : 'rgba(17,42,51,0.06)'
                    }`,
                    transform: isSelected ? 'scale(1.005)' : 'scale(1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#edf2f0';
                      e.currentTarget.style.borderColor = 'rgba(17,42,51,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.borderColor = 'rgba(17,42,51,0.06)';
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    {/* Option indicator */}
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-200"
                      style={{
                        borderColor: isSelected ? '#3165e8' : 'rgba(17,42,51,0.2)',
                        backgroundColor: isSelected ? '#3165e8' : 'transparent',
                      }}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3" fill="none" stroke="#f3f6f5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        color: isSelected ? '#112a33' : '#425a60',
                      }}
                    >
                      {option.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div
        className="px-6 py-6 max-w-3xl mx-auto w-full flex items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(17,42,51,0.06)' }}
      >
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            color: currentIndex === 0 ? '#64767a' : '#425a60',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={selectedOption === null || isTransitioning}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${selectedOption !== null ? 'pulse-glow' : ''}`}
          style={{
            backgroundColor:
              selectedOption !== null ? '#3165e8' : 'rgba(17,42,51,0.08)',
            color: selectedOption !== null ? '#f3f6f5' : '#64767a',
            cursor: selectedOption !== null ? 'pointer' : 'not-allowed',
            transform: selectedOption !== null ? 'scale(1)' : 'scale(1)',
          }}
          onMouseEnter={(e) => {
            if (selectedOption !== null) {
              e.currentTarget.style.backgroundColor = '#76e6cf';
              e.currentTarget.style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedOption !== null) {
              e.currentTarget.style.backgroundColor = '#3165e8';
            }
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isLastQuestion ? 'See My Results' : 'Next Question'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </main>
  );
}
