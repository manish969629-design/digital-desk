import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-black">
              Digital Desk
            </h2>

            <p className="mt-5 text-slate-400 leading-8">
              Digital Desk provides Government Services,
              PDF Tools, Image Tools, CSC Services and
              AI-powered assistance from one platform.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                <MessageCircle size={20} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              Popular Services
            </h3>

            <div className="space-y-4 text-slate-400">
              <Link href="/service/pan-card">PAN Card</Link><br />
              <Link href="/service/aadhaar">Aadhaar</Link><br />
              <Link href="/service/passport">Passport</Link><br />
              <Link href="/service/driving-licence">Driving Licence</Link><br />
              <Link href="/service/voter-id">Voter ID</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              Tools
            </h3>

            <div className="space-y-4 text-slate-400">
              <p>Merge PDF</p>
              <p>Split PDF</p>
              <p>Compress PDF</p>
              <p>Passport Photo</p>
              <p>Remove Background</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex gap-3">
                <Phone size={20} />
                <span>9696295457</span>
              </div>

              <div className="flex gap-3">
                <Mail size={20} />
                <span>yoursdigitaldesk@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={20} />
                <span>Kanpur, Uttar Pradesh</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Digital Desk. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}