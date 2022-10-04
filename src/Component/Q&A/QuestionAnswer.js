import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='text-left pl-16 pt-7'>
            <h1 className='text-xl font-bold'>How Does React Work?</h1>
            <p className='text-medium pt-2'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>

            <h1 className='text-xl font-bold py-5'>What are the differences between props and state?</h1>
            <div className="overflow-x-auto relative py-2 pr-16">
                <table className="w-full text-medium font-semibold text-left text-gray-500 ">
                    <thead className=" text-gray-700 uppercase bg-pink-200">
                        <tr>
                            <th scope="col" className="py-3 px-6 ">
                                Props
                            </th>
                            <th scope="col" className="py-3 px-6">
                                State
                            </th>
                        </tr>
                    </thead>
                <tbody>
                <tr className="bg-pink-100 border-b border-gray-300">
                    <th scope="row" className="py-4 px-6 text-medium font-medium text-gray-900 whitespace-nowrap">
                        The Data is passed from one component to another.
                    </th>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                        The Data is passed within the component only.
                    </th>
                </tr>
                <tr className="bg-pink-100 border-b border-gray-300">
                    <th scope="row" className="py-4 px-6 text-medium font-medium text-gray-900 whitespace-nowrap">
                        It is Immutable (cannot be modified).
                    </th>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                        It is Mutable ( can be modified).
                    </th>
                </tr>
                <tr className="bg-pink-100 border-b border-gray-300">
                    <th scope="row" className="py-4 px-6 text-medium font-medium text-gray-900 whitespace-nowrap">
                        Props can be used with state and functional components.
                    </th>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                        State can be used only with the state components/class component
                    </th>
                </tr>
                <tr className="bg-pink-100 border-b border-gray-300">
                    <th scope="row" className="py-4 px-6 text-medium font-medium text-gray-900 whitespace-nowrap">
                        Props are read-only.
                    </th>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                        State is both read and write.
                    </th>
                </tr>
                </tbody>
            </table>
            </div>
            <h1 className='text-xl font-bold py-5'>What are the uses of useEffect except data load?</h1>
            <ul className="space-y-1 max-w-md list-inside text-gray-900 pb-5">
                <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Running on state change: validating input field
                </li>
                <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Running on state change: live filtering
                </li>
                <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Running on state change: trigger animation on new array value
                </li>
                <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Running on props change: update paragraph list on fetched API data update
                </li>
            </ul>
        </div>
    );
};

export default QuestionAnswer;