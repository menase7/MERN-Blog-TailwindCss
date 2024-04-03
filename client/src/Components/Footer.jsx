import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-col-1'>
          <div className='mt-5'>
          <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Menase's</span>Blog
        </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link href='https://www.100projects.com' target='_blank' rel='noopener noreferrer' >
                100 JS Projects
              </Footer.Link>
              <Footer.Link href='/about' target='_blank' rel='noopener noreferrer' >
                Menase's Blog
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow us' />
            <Footer.LinkGroup col>
              <Footer.Link href='https://www.github.com/menase7' target='_blank' rel='noopener noreferrer' >
                Github
              </Footer.Link>
              <Footer.Link href='#' >
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Legal' />
            <Footer.LinkGroup col>
              <Footer.Link href='#' target='_blank' rel='noopener noreferrer' >
                Privacy Policy
              </Footer.Link>
              <Footer.Link href='#' >
                Terms & cnditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'></div>
        <div className='flex justify-between'>
          <Footer.Copyright href='#' by="Menase's blog" year={new Date().getFullYear()}/>
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
          <Footer.Icon href='' icon={BsFacebook} />
          <Footer.Icon icon={BsTwitter} />
          <Footer.Icon icon={BsInstagram} />
          <Footer.Icon href='https://github.com/menase7' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom