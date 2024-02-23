import React from 'react'
import image1 from '../../assets/asset-images/componylogo/companylogo3.jpg'
import './Footer.css'

const Foots = () => {
  return (
    <>
    <footer class="bg-black rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between text-white">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src={image1} class="h-8 mr-3" alt="Company Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Company</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="/About" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/About" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/Services/1" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="/ContactUs" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Company</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  )
}

export default Foots