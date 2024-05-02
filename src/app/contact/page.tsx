
  export default function Contact() {
    return (
      <div className="flex justify-center items-center h-screen">
        <form name="contact" action="/success" method="POST" data-netlify="true" className="text-2xl px-2">
        <input type="hidden" name="form-name" value="contact"  />
          <div>
            <div>
              <p className="text-2xl">Have questions or want to get in touch?</p>
              <p className="mb-4 text-2xl">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>
          <p>
            <label htmlFor="yourname">Your Name:</label> <br />
            <input type="text" name="name" id="yourname" className="bg-blue-200 p-2 rounded-md w-full mb-2" />
          </p>
          <p>
            <label htmlFor="youremail">Your Email:</label> <br />
            <input type="email" name="email" id="youremail" className="bg-blue-200 p-2 rounded-md w-full mb-2" />
          </p>
          <p>
            <label htmlFor="yourmessage">Message:</label> <br />
            <textarea name="message" id="yourmessage" className="w-2/3 h-48 bg-gray-600 p-2 rounded-md text-white mb-2"></textarea>
          </p>
          <p>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </p>
        </form>
      </div>
    );
  }
  
  