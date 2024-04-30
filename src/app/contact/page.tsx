/*export default function Contact() {
    return (
        <form name="contact" method="POST" className="mx-auto text-2xl">
      <input type="hidden" name="form-name" value="contact" />
      <p>
<input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage" className="w-2/3 h-2/3 bg-gray-600"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    )
}*/


/*export default function Contact() {
    return (
        
      <div className="flex justify-center items-center h-screen">
        <form name="contact" method="POST" className="text-2xl">
        <div>
        <div className="text-center">
        <p className="text-lg">Have questions or want to get in touch?</p>
        <p className="mb-4 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
        </div>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            
            <label htmlFor="yourname">
              Your Name:
            </label> <br />
            <input type="text" name="name" id="yourname" className="bg-gray-500" />
          </p>
          <p>
            <label htmlFor="youremail">
              Your Email:
            </label> <br />
            <input type="email" name="email" id="youremail" className="bg-gray-500" />
          </p>
          <p>
            <label htmlFor="yourmessage">
              Message:
            </label> <br />
            <textarea name="message" id="yourmessage" className="w-2/3 h-2/3 bg-gray-600"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }*/

  export default function Contact() {
    return (
      <div className="flex justify-center items-center h-screen">
        <form name="contact" method="POST" className="text-2xl px-2">
          <div>
            <div>
              <p className="text-2xl">Have questions or want to get in touch?</p>
              <p className="mb-4 text-2xl">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>
          <input type="hidden" name="form-name" value="contact"  />
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
  
  