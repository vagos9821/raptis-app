import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-secondary w-full items-center py-[100px] lg:px-[100px] h-auto">
      <div className="w-full flex flex-col lg:items-start lg:justify-start items-center justify-center text-center lg:text-left gap-9">
        <h2 className="lg:text-3xl text-xl text-primary">
          Επικοινωνήστε μαζί μας
        </h2>
        <p className="text-l">Θα χαρούμε να σας εξυπηρετήσουμε!</p>
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          <Link href="/contact-us">Επικοινωνία</Link>
        </button>
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
