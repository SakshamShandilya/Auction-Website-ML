import { Product } from "@/types/Product";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type QnAtype = {
    name: string;
    comment: string;
    response: string;
};
type Props = {
    setShowQueryModal: (showQueryModal: boolean) => void;
    product: Product;
    QnA: QnAtype[];
};

const QueryModal = ({ setShowQueryModal, product, QnA }: Props) => {
    const [question, setQuestion] = useState("");

    const submitAnswer = () => {
        if (localStorage.getItem("uname") === null) {
            return toast.error("Please login or refresh to ask a question!");
        }
        if (question.length > 5) {
            // submit answer to backend
            const body = {
                id: product?._id,
                name: localStorage.getItem("uname"),
                comment: question,
            };
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/add-question`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        toast.success("Answer submitted successfully!");
                        QnA.push({
                            name: localStorage.getItem("uname") || "",
                            comment: question,
                            response: "",
                        });
                        setQuestion("");
                    } else {
                        toast.error("Unable to submit answer!");
                    }
                    setShowQueryModal(false);
                })
                .catch((err) => {
                    toast.error("Unable to submit answer!");
                    console.log(err);
                });
        } else {
            toast.error("Please enter a valid answer!");
        }
    };
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <ToastContainer />
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-20 transition-opacity md:block"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transhtmlForm text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button
                                onClick={() => setShowQueryModal(false)}
                                type="button"
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {/*  */}
                            <div className="w-full">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your question
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        setQuestion(e.target.value)
                                    }
                                    value={question}
                                    id="message"
                                    rows={4}
                                    className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                                <button
                                    onClick={submitAnswer}
                                    type="button"
                                    className="text-white bg-mobile focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                >
                                    Yes, I'm sure
                                </button>
                                <button
                                    onClick={() => setShowQueryModal(false)}
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryModal;
