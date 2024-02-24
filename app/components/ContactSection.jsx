import React from "react";

const ContactSection = () => {
  return (
    <div className="flex bg-secondary w-full items-center p-[100px]">
      <div className="w-full">
        <h2 className="text-3xl text-primary">Επικοινωνήστε μαζί μας</h2>
        <p className="text-l">Θα χαρούμε να σας εξυπηρετήσουμε!</p>
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          Επικοινωνία
        </button>
      </div>
      <div className="sm:w-full w-0">
        <img
          src="/customBag.png"
          alt="Custom Bag"
          className="w-auto h-[400px] object-cover"
        />
      </div>
      <div className="w-full">
        <div>
          <h3 className="text-accent text-2xl font-bold">1&#41;</h3>
          <h5 className="text-accent font-bold">Σχεδιασμός Μακέτας</h5>
          <p>Αναλαμβάνουμε τον σχεδιασμό για το προϊόν σας.</p>
        </div>
        <div>
          <h3 className="text-accent text-2xl font-bold">2&#41;</h3>
          <h5 className="text-accent font-bold">Εκτύπωση</h5>
          <p>
            Χρησιμοποιώντας υλικά υψηλής ποιότητας, προχωρούμε στην εκτύπωση του
            προϊόντος.
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
  );
};

export default ContactSection;
