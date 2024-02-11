import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Asif Uddin Ahmed Hemel' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='hemel18103112@gmail.com' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="email" required placeholder='Hire me..!' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact