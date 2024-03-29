"use client";

import ContactSection from "../components/ContactSection";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40516cd4-c392-4c9e-b34a-7849da533123");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <div className="pt-[60px] flex flex-col">
        <div className="flex flex-col lg:flex-row justify-center bg-secondary w-full items-center py-[100px] lg:px-[100px] h-auto">
          <div className="w-full flex flex-col lg:items-start lg:justify-start items-center justify-center text-center lg:text-left gap-9">
            <h2 className="lg:text-3xl text-xl text-primary">
              Επικοινωνήστε μαζί μας
            </h2>
            <p className="text-l">Θα χαρούμε να σας εξυπηρετήσουμε!</p>
            <ul>
              <li className="flex lg:text-lg text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.21,4.576a1.906,1.906,0,0,0-1.63-.35l-3.53.89a1.086,1.086,0,0,1-.44,0L9.63,3.876a2.041,2.041,0,0,0-.92,0L4.5,4.936a1.893,1.893,0,0,0-1.44,1.84v11.15a1.871,1.871,0,0,0,.73,1.5,1.906,1.906,0,0,0,1.63.35l3.53-.89a1.086,1.086,0,0,1,.44,0l4.98,1.24a2.315,2.315,0,0,0,.46.05,2.4,2.4,0,0,0,.46-.05l4.21-1.06a1.893,1.893,0,0,0,1.44-1.84V6.076A1.871,1.871,0,0,0,20.21,4.576ZM8.67,17.926l-3.49.87a.89.89,0,0,1-1.12-.87V6.776a.9.9,0,0,1,.68-.87l3.93-.99Zm5.66,1.16-4.66-1.16V4.916l4.66,1.16Zm5.61-1.86a.9.9,0,0,1-.68.87l-3.93.99V6.076l3.49-.87a.908.908,0,0,1,.78.16.886.886,0,0,1,.34.71Z" />
                </svg>
                Αλιμος
              </li>
              <li className="flex lg:text-lg text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.436,20.938c-6.268,0-11.367-5.105-11.367-11.379c0-1.996,0.521-3.953,1.504-5.659
                c0.262-0.454,0.714-0.753,1.24-0.822c0.541-0.073,1.07,0.108,1.454,0.493l3.14,3.139c0.324,0.324,0.503,0.755,0.503,1.214
                s-0.179,0.89-0.503,1.214l-0.296,0.296c-0.754,0.755-0.754,1.981,0,2.735l1.721,1.721c0.73,0.73,2.005,0.73,2.735,0l0.29-0.29
                c0.671-0.67,1.76-0.669,2.429,0l3.139,3.139c0.384,0.384,0.563,0.915,0.492,1.455c-0.069,0.526-0.369,0.978-0.822,1.239
                C18.388,20.418,16.431,20.938,14.436,20.938z M6.042,4.063c-0.033,0-0.066,0.002-0.099,0.006C5.728,4.097,5.544,4.218,5.44,4.4
                C4.542,5.954,4.069,7.738,4.069,9.559c0,5.723,4.65,10.379,10.367,10.379c1.82,0,3.604-0.474,5.158-1.371
                c0.183-0.105,0.303-0.289,0.331-0.503c0.03-0.23-0.046-0.455-0.208-0.618l-3.139-3.139c-0.279-0.28-0.735-0.278-1.015,0l-0.29,0.29
                c-1.108,1.109-3.041,1.107-4.149,0l-1.721-1.721c-1.144-1.144-1.144-3.005,0-4.149l0.296-0.296c0.136-0.136,0.21-0.316,0.21-0.507
                s-0.074-0.371-0.21-0.507l-3.14-3.14C6.421,4.138,6.236,4.063,6.042,4.063z"
                  />
                </svg>
                +30 210-123-1231
              </li>
              <li className="flex lg:text-lg text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.435,4.065H4.565c-1.38,0-2.5,1.12-2.5,2.5v10.87c0,1.38,1.12,2.5,2.5,2.5h14.87
                c1.38,0,2.5-1.12,2.5-2.5V6.565C21.935,5.185,20.815,4.065,19.435,4.065z M4.565,5.065h14.87c0.79,0,1.44,0.61,1.49,1.39
                c-2.47,1.32-4.95,2.63-7.43,3.95c-0.34,0.18-0.69,0.42-1.06,0.53c-0.64,0.2-1.14-0.11-1.67-0.39c-1.42-0.75-2.84-1.51-4.25-2.26
                c-1.14-0.6-2.3-1.21-3.44-1.82C3.125,5.685,3.765,5.065,4.565,5.065z M20.935,17.435c0,0.83-0.67,1.5-1.5,1.5H4.565
                c-0.83,0-1.5-0.67-1.5-1.5v-9.84c2.36,1.24,4.71,2.5,7.07,3.75c0.43,0.22,0.87,0.5,1.35,0.6c0.72,0.15,1.38-0.07,2-0.41
                c1.45-0.76,2.89-1.53,4.34-2.29c1.04-0.56,2.07-1.1,3.11-1.65V17.435z"
                  />
                </svg>
                info@papaki.com
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center pt-9">
            <img
              src="/CustomBag.png"
              alt="Custom Bag"
              className="w-auto h-[400px] object-cover"
            />
          </div>
          <div className="w-full p-[20px]">
            <div>
              <h3 className="text-accent text-2xl font-bold">1&#41;</h3>
              <h5 className="text-accent font-bold">Σχεδιασμός Μακέτας</h5>
              <p>Αναλαμβάνουμε τον σχεδιασμό για το προϊόν σας.</p>
            </div>
            <div>
              <h3 className="text-accent text-2xl font-bold">2&#41;</h3>
              <h5 className="text-accent font-bold">Εκτύπωση</h5>
              <p>
                Χρησιμοποιώντας υλικά υψηλής ποιότητας, προχωρούμε στην εκτύπωση
                του προϊόντος.
              </p>
            </div>
            <div>
              <h3 className="text-accent text-2xl font-bold">3&#41;</h3>
              <h5 className="text-accent font-bold">Κατασκευή</h5>
              <p>
                Με την πλούσια εμπειρία μας και την τεχνογνωσία που διαθέτουμε,
                δημιουργούμε τη συσκευασία που αντιπροσωπεύει το brand σας.
              </p>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col bg-accent p-20 w-full justify-center items-center gap-2 "
          onSubmit={handleSubmit}
        >
          <label className="text-">Όνοματεπώνυμο</label>
          <input
            className="w-full h-10 bg-primary resize-none outline-none text-background p-5"
            type="text"
            name="name"
            placeholder="Το όνοματεπώνυμο σας"
            required
          />
          <label>E-mail</label>
          <input
            className="w-full h-10 bg-primary resize-none outline-none text-background p-5"
            type="email"
            name="email"
            placeholder="Το e-mail σας"
            required
          />
          <label>Μήνυμα</label>
          <textarea
            className="w-full h-40 bg-primary resize-none outline-none text-background p-5"
            name="message"
            placeholder="Γράψτε μια ερώτηση ή πείτε ένα γεια"
            required
          ></textarea>
          <button
            className="bg-primary mt-5 p-2 rounded-xl text-accent focus:underline hover:underline focus:text-background hover:text-background "
            type="submit"
          >
            Αποστολή Μηνύματος
          </button>
        </form>
      </div>
    </>
  );
}
