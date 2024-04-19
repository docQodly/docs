import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'


const links = [
    {
        name: 'v0.0.24',
        href: 'webform-editor/v0.0.24'
    },
    {
        name: 'v0.0.26',
        href: 'webform-editor/v0.0.26'
    },
    {
        name: 'v0.0.27',
        href: 'webform-editor/v0.0.27'
    },
    {
        name: 'v0.0.28',
        href: 'webform-editor/v0.0.28'
    },
]


export function VersionDropdown() {

    // return <button className='border-0 px-4 py-2 rounded-full transition text-[var(--ifm-breadcrumb-color-active)] cursor-pointer inline-flex items-center bg-[var(--ifm-breadcrumb-item-background-active)]'>Navigate &#9660;</button>

    return <Popover className="relative">
        {({ open }) => (
            <>
                <Popover.Button
                    className={`
            
            group border-0 px-4 py-2 rounded-full transition text-[var(--ifm-breadcrumb-color-active)] cursor-pointer inline-flex items-center bg-[var(--ifm-breadcrumb-item-background-active)]`}
                >
                    <span>v0.0.24</span>
                    <ChevronDownIcon
                        className={`w-5 h-5 text-[var(--ifm-breadcrumb-color-active)]`}
                        aria-hidden="true"
                    />
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute left-0 shadow-lg bg-white border border-black/10 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-white p-4">
                                {links.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                        {item.name}

                                    </a>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        )}
    </Popover>
}