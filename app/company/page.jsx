import CompanyHeader from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function CompanyPage() {
  return (
    <main>
      <Navbar />
      <CompanyHeader />
          <h1>
            Bicycle Newfoundland and Labrador
          </h1>
      <footer>
        <p>Footer content (same as Home page)</p>
      </footer>
    </main>
  );
}