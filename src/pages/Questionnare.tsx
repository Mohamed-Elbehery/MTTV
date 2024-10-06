import { useCallback, useEffect, useState } from "react";
import { questions } from "../constants";
import { cn } from "../lib/cn";

import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Questionnare = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userQuestions, setUserQuestions] = useState(questions);
  const [activeChoice, setActiveChoice] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = userQuestions.find((question) => +question.id == +progress);

  const handleStart = () => setProgress(1);

  const goToNextQuestion = useCallback(() => {
    if(progress == 13) setIsLoading(true);

    if (userQuestions[progress - 1].optional) {
      setProgress(prev => prev + 1);
      return;
    }

    if (userQuestions[progress - 1].answer) {
      setProgress(prev => prev + 1)
      setIsError(false);
      return;
    }

    setIsError(true);
  }, [progress, userQuestions]);

  const goToPrevQuestion = () => {
    setProgress(prev => prev - 1)
    setIsError(false);
  };

  const changeAnswerValue = (value: string) => {
    const newQuestions = [...userQuestions];

    const newQuestion = newQuestions[progress - 1];
    newQuestion.answer = value;

    newQuestions[progress - 1] = newQuestion;

    setUserQuestions(newQuestions);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!value) return;
    changeAnswerValue(value);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (progress == 0 && e.key.toString() === "Enter") setProgress(1);

      if (progress > 0 && questions.length + 1 && e.key.toString() === "Enter") goToNextQuestion();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [progress, goToNextQuestion]);

  if (progress >= 14) {
    (async () => {
      const userEmail = userQuestions[1].answer;
      const answers = userQuestions.map((question) => question.answer);

      const msg = `<div style="background-color: #555; color: #fbfbfb; padding: 12px">
      <p style="margin: 12px 0;">Answer 1 : ${answers[0]}</p>
      <p style="margin: 12px 0;">Answer 2 : ${answers[1]}</p>
      <p style="margin: 12px 0;">Answer 3 : ${answers[2]}</p>
      <p style="margin: 12px 0;">Answer 4 : ${answers[3]}</p>
      <p style="margin: 12px 0;">Answer 5 : ${answers[4]}</p>
      <p style="margin: 12px 0;">Answer 6 : ${answers[5]}</p>
      <p style="margin: 12px 0;">Answer 7 : ${answers[6]}</p>
      <p style="margin: 12px 0;">Answer 8 : ${answers[7]}</p>
      <p style="margin: 12px 0;">Answer 9 : ${answers[8]}</p>
      <p style="margin: 12px 0;">Answer 10 : ${answers[9]}</p>
      <p style="margin: 12px 0;">Answer 11 : ${answers[10]}</p>
      <p style="margin: 12px 0;">Answer 12 : ${answers[11]}</p>
      <p style="margin: 12px 0;">Answer 13 : ${answers[12]}</p>
      </div>`

      await fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: "dev.elbehery@gmail.com",
          subject: `Questionnare Answers - ${userEmail.toString()}`,
          message: msg,
        }),
      });

      navigate("/schedule");
    })();
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      {isLoading && <Loading />}

      {progress == 0 && (
        <div className="space-y-5">
          <h3 className="text-primary font-medium text-2xl text-center">الخطوة الأولى : اضغط على ابدأ عشان تحجز استشارتك المجانية</h3>
          <p className="max-w-[640px] text-xl text-center">ملحوظة : فضلا…هتجاوب على استبيان سريع, دقة اجاباتك هتزيد من فائدة الاستشارة لأننا هنحلل اجابتك عشان نقدر نفهم اكتر البيزنس الخاص بيك</p>

          <ProgressButtons onClick={handleStart} />
        </div>
      )}

      {progress > 0 && progress < questions.length + 1 && (
        <>
          {/* Questions */}
          <div key={progress} className="question space-y-6 w-fit mx-auto">
            <h3 className="text-primary font-bold text-2xl w-[640px] text-balance">
              {currentQuestion?.id} - {currentQuestion?.title}
            </h3>

            {currentQuestion?.choices ? (
              currentQuestion?.choices.map((choice) => (
                <div onClick={async () => {
                  setActiveChoice(choice);
                  changeAnswerValue(choice);
                  goToNextQuestion();
                }} className={cn("bg-gray-800 border-white border rounded-lg p-4 cursor-pointer hover:bg-gray-600", activeChoice === choice && "bg-gray-600")} key={choice}><span className={`opacity-0 ${activeChoice == choice && "!opacity-100"}`}>✓</span> {choice}</div>
              ))
            ) : (
              <input
                key={progress}
                onChange={handleInputChange}
                className="w-[640px] border-b bg-transparent outline-0 pb-2 text-primary text-lg"
                type={progress == 2 ? "email" : "text"}
                name={progress == 2 ? "email" : undefined}
                autoComplete={progress == 2 ? "email" : "name"}
                placeholder="أدخل البيانات المطلوبة هنا رجاءً"
              />
            )}
            {isError && <p className="text-red-500">برجاء ادخال المعلومات في حقل البيانات</p>}

            <ProgressButtons started className="items-center justify-start" onClick={goToNextQuestion} />
          </div>

          {/* Progres Bar */}
          <ProgressBar previous={goToPrevQuestion} next={goToNextQuestion} progress={progress} />
        </>
      )}
    </section>
  )
}

const ProgressButtons = ({ onClick, className, started = false }: { onClick: () => void, className?: string, started?: boolean }) => {
  return (
    <div className={cn("flex items-center justify-center gap-x-3", className)}>
      <button onClick={onClick} className="text-primary text-bold text-xl brightness-75 hover:brightness-100 transition">↵ Press Enter</button>
      <button onClick={onClick} className="bg-primary text-white px-4 py-2 rounded-lg text-xl font-medium brightness-90 hover:brightness-100 transition">{!started ? "ابدأ" : "OK"}</button>
    </div>
  )
};

export default Questionnare;