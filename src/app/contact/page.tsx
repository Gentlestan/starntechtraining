
  "use client"

  import { useState } from 'react';
  import { useRouter } from 'next/navigation';
  
  export default function Contact() {
      const [status, setStatus] = useState<string | null>(null); // Initialize status as null or string
      const [error, setError] = useState<string | null>(null); // Initialize error as null or string
      const router = useRouter();
  
      const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          
          try {
              setStatus('pending');
              setError(null);
              const myForm = event.currentTarget;
              const formData = new FormData(myForm);
              const res = await fetch('/__forms.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(formData as any).toString()
              });
              
              if (res.status === 200) {
                  setStatus('ok');
                  router.push('/success'); // Redirect upon successful submission
              } else {
                  setStatus('error');
                  setError(`${res.status} ${res.statusText}`);
              }
          } catch (e) {
              setStatus('error');
              setError(`${e}`);
          }
      };
  
      return (
          <div className="flex justify-center items-center h-screen">
              <form
                  name="contact"
                  onSubmit={handleFormSubmit}
                  className="text-2xl px-2"
              >
                  {/* Form inputs */}
                  <input 
        type="hidden" 
        name="form-name" 
        value="contact"  />
          <div>
            <div>
              <p className="text-2xl">Have questions about our training or want to schedule a solar, CCTV, or fire alarm installation at your premise?</p>
              <p className="mb-4 text-2xl">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>
          <p>
            <label htmlFor="yourname">Your Name:</label> <br />
            <input type="text" 
            name="name" 
            id="yourname" 
            className="bg-blue-200 p-2 rounded-md w-full mb-2" 
            />
          </p>
          <p>
            <label htmlFor="youremail">Your Email:</label><br />
            <input
             type="email" 
             name="email" 
             id="youremail"  
             className="bg-blue-200 p-2 rounded-md w-full mb-2" />
          </p>
          <p>
            <label htmlFor="yourmessage">Message:</label> <br />
            <textarea 
            name="message" 
            id="yourmessage"
            className="w-2/3 h-48 bg-gray-600 p-2 rounded-md text-white mb-2"></textarea>
          </p>
          <p>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </p>
                  {/* Status message */}
                  {status === 'ok' && (
                      <div className="alert alert-success">
                          <SuccessIcon />
                          Submitted!
                      </div>
                  )}
                  {status === 'error' && (
                      <div className="alert alert-error">
                          <ErrorIcon />
                          {error}
                      </div>
                  )}
              </form>
          </div>
      );
  }
  
  function SuccessIcon() {
      return (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
          </svg>
      );
  }
  
  function ErrorIcon() {
      return (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
          </svg>
      );
  }
  
  