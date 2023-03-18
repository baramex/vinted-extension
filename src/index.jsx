import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Misc/Badge';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./styles/main.css";
import "./styles/tailwind.css";
import Login from './components/Login';

function Main() {
    const [page, setPage] = useState("/login");
    const [open, setOpen] = useState(false);

    const pages = [
        {
            path: "/login",
            component: <Login />
        }
    ]

    return (<div className='fixed bottom-6 left-6'>
        <div className='relative'>
            <Badge onClick={() => setOpen(!open)} />

            <Transition.Root show={open} as={Fragment} onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="-left-full -bottom-full scale-50 opacity-75"
                    enterTo="left-0 bottom-0 scale-100 opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="left-0 bottom-0 scale-100 opacity-100"
                    leaveTo="-left-full -bottom-full scale-50 opacity-75"
                >
                    <div className='absolute'>
                        <div className='flex justify-end'>
                            <button onClick={() => setOpen(false)} className='border-x border-t border-gray-300 flex items-center justify-center rounded-t-xl px-3 py-1'>
                                <ChevronDownIcon className='stroke-gray-600 w-6' />
                            </button>
                        </div>
                        <div className='rounded-xl border border-gray-300 w-60 h-96 bg-white !rounded-tr-none'>
                            {
                                pages.find(a => a.path === page)?.component
                            }
                        </div>
                    </div>
                </Transition.Child>
            </Transition.Root>
        </div>
    </div>);
}

const app = document.createElement('div');
app.id = "extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);