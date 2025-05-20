import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-950 text-white p-4'>
      <div className='flex '>
        <div className='flex  flex-col font-medium  gap-3'>
          <div>

            <ul className='flex gap-6 text-gray-500 font-bold'>
              <h2>ENVATO MARKET</h2>
              <h2>Help</h2>
              <h2 className='flex flex-col'> <p>OUR</p> <p>COMMUNITY</p> </h2>
              <h2>MEET EMVATO</h2>

            </ul>
          </div>
          <div className='flex gap-4'>
            <div >
              <ul className='flex flex-col gap-3'>
                <li className='hover:underline cursor-pointer' >Term</li>
                <li className='hover:underline cursor-pointer' >Licenses</li>
                <li className='hover:underline cursor-pointer' >Market</li>
                <li className='hover:underline cursor-pointer' >Become an affiliate</li>
                <li className='hover:underline cursor-pointer' >Cookies</li>
                <li className='hover:underline cursor-pointer' >Cookies settings</li>
              </ul>

            </div>
            <div>
              <ul className='flex flex-col gap-3'>

                <li className='hover:underline cursor-pointer' >Help</li>
                <li className='hover:underline cursor-pointer' >Authors</li>
              </ul>
            </div>
            <div>
              <ul  className='flex flex-col gap-3'>
                <li className='hover:underline cursor-pointer' >Communit</li>
                <li className='hover:underline cursor-pointer' >Blog</li>
                <li className='hover:underline cursor-pointer' >Forums</li>
                <li className='hover:underline cursor-pointer' >Meetups</li>

              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-3'>
                <li className='hover:underline cursor-pointer' >About Envato </li>
                <li className='hover:underline cursor-pointer' >Careers</li>
                <li className='hover:underline cursor-pointer' >Privacy Policy</li>
                <li className='hover:underline cursor-pointer' >Do not sell or share my personal information</li>
                <li className='hover:underline cursor-pointer' >Sitemap</li>
              </ul>
            </div>
          </div>



        </div>
        <div className='flex gap-21 '>
          <div >
            <div>
              <img className='h-5' src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg" alt="" />
            </div>
            <div className='flex gap-4 mt-4'>
              <p>
                <p>77,302,208 </p>
                <p>items sold</p>
              </p>
              <p>
                <p>$1,213,184,833</p>
                <p>community earning</p>
              </p>
            </div>
            
          </div>
          <div>
            <img className='h-22 mt-4' src="https://public-assets.envato-static.com/assets/header-footer/logo-bcorp-e83f7da84188b8edac311fbf08eaa86634e9db7c67130cdc17837c1172c5f678.svg"alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
