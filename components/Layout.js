import Head from 'next/head'

const Layout = ({ children }) => {
  const head = () => (
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
      crossorigin='anonymous'
    />
  )

  const nav = () => {
    return (
      <ul className='nav nav-tabs bg-primary'>
        <li className='nav-item'>
          <a className='nav-link  text-white' href='/'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link  text-white' href='/'>
            Login
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link  text-white' href='/'>
            Register
          </a>
        </li>
      </ul>
    )
  }

  return (
    <>
      {head()}
      {nav()}

      <div className='container pt-5 pb-5'>{children}</div>
    </>
  )
}

export default Layout
