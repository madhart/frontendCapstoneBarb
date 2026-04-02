import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News from "@/components/News.jsx";

const volunteerWays = [
  "Sign on as a competitive cycling coach",
  "Volunteer in governance or committee work",
  "Help with events both approved and sanctioned",
  "Marshal races/events",
  "Organize sanctioned group rides",
  "Join the Board of Directors (annually at the AGM)",
];

const advocacyInitiatives = [
  "Support for effective cycling infrastructure throughout the province",
  "Assist in the National Active Transportation Strategy",
  "Aid federal e-bike regulation, education programs, and rebate programs",
  "Continued development of the Newfoundland T\'Railway for cycling",
  "Help in the development of mountain bike infrastructure in Pippy Park",
];

const awards2025 = [
  ["Junior Female Mountain Bike Athlete of the Year", "Lydia Parsons"],
  ["Junior Male Mountain Bike Athlete of the Year", "Ian Organ"],
  ["Junior Female Road Cycling Athlete of the Year", "Portia Curnoe-Afanassiev"],
  ["Junior Male Road Cycling Athlete of the Year", "Lincoln Harris"],
  ["Senior Female Mountain Bike Athlete of the Year", "Sophie Cote"],
  ["Senior Male Mountain Bike Athlete of the Year", "Austin Whelan"],
  ["Senior Female Road Cycling Athlete of the Year", "Stephanie Nevin"],
  ["Senior Male Road Cycling Athlete of the Year", "Eric Stock"],
  ["Outstanding Volunteer of the Year", "Gillian Russell"],
  ["Outstanding Coach of the Year", "Mick Cutler"],
];

export default function CompanyPage() {
  return (
    <main>
      <Navbar />
      <section>
        <h1>Bicycle Newfoundland and Labrador</h1>
        <p>
          Promoting cycling excellence, advocacy, and community across the province.
        </p>
      </section>

      <section>
        <h2>About</h2>

        <article>
          <h3>Constitution and By-laws</h3>
          <p>
            <a href="#">View Constitution and By-laws Document (PDF)</a>
          </p>
        </article>

        <article>
          <h3>Volunteers</h3>
          <p>
            Bicycle Newfoundland and Labrador (BNL) is run and organized by volunteers
            from across the province. We always welcome help and support from anyone
            interested.
          </p>
          <p>The ways you can volunteer include:</p>
          <ul>
            {volunteerWays.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            If you would like to contribute, contact BNL at{" "}
            <a href="mailto:info@bicyclenl.com">info@bicyclenl.com</a>.
          </p>
        </article>

        <article>
          <h3>Advocacy</h3>
          <p>
            Bicycle Newfoundland and Labrador (BNL) is engaged in local, provincial,
            and federal advocacy initiatives including:
          </p>
          <ul>
            {advocacyInitiatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <h3>Bicycle Safety Campaign - One Metre Rule</h3>
          <p>
            In 2018, BNL successfully lobbied the provincial government to pass
            legislation regarding the One Metre Rule. On March 5, 2019, the Highway
            Traffic Act was amended to increase safety on provincial roads and
            highways.
          </p>
          <p>
            Drivers must leave one metre of open space between their vehicle and a
            bicycle (or pedestrian) on roads with posted speeds of 60 km/h or less.
            The required distance is one and a half metres for roads posted above
            60 km/h.
          </p>
          <p>
            In passing this law, Newfoundland and Labrador joined Ontario, Quebec,
            Nova Scotia, New Brunswick, and Prince Edward Island with similar
            legislation.
          </p>
        </article>

        <article>
          <h3>T&apos;Railway</h3>
          <p>
            The Newfoundland T&apos;Railway forms part of the Trans Canada Trail and
            covers 883 km (549 mi), linking urban, rural, and wilderness areas.
          </p>
          <p>
            Protected as a linear park, it follows the historic Newfoundland Railway
            corridor from Channel-Port aux Basques to St. John&apos;s with branches to
            Stephenville, Lewisporte, Bonavista, Placentia, and Carbonear.
          </p>
          <p>
            Cycling the Newfoundland T&apos;Railway is an adventure for riders who want to
            experience the province&apos;s wilderness settings.
          </p>
          <p>Resources:</p>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/T%27Railway">
                Learn about T&apos;Railway on Wikipedia
              </a>
            </li>
            <li>
              <a href="#">Slow Biker&apos;s article: Across Newfoundland by Fatbike</a>
            </li>
            <li>
              <a href="#">Newfoundland T&apos;Railway guide on Bikepacking.com</a>
            </li>
            <li>
              <a href="https://www.trailway.ca/">Trailway.ca</a>
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Strategic Plan</h2>
        <p>The current strategic plan will be updated as it expires in 2026.</p>
        <p>
          Plan link: <a href="#">Strategic Plan (PDF)</a>
        </p>
      </section>

      <section>
        <h2>Policies</h2>
        <p>Current BNL policies will be listed and updated here as they are revised.</p>
        <ul>
          <li>
            <a href="#">Policy Document (PDF)</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Financial Reports</h2>
        <ul>
          <li>
            <a href="#">Latest Financial Report (PDF)</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Annual General Meeting (AGM) and Financial Statements</h2>
        <p>
          This section tracks the history of financial statements and reports
          presented at BNL&apos;s AGM.
        </p>
        <p>2026 AGM Date: TBD (Fall 2026)</p>
        <ul>
          <li>
            <a href="#">2025 AGM Report (PDF)</a>
          </li>
          <li>
            <a href="#">2024 AGM Report (PDF)</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>BNL Membership</h2>
        <p>
          Register or renew your BNL membership through the current Cycling Canada
          Network (CCN) registration system.
        </p>
        <p>
          <a href="#">Go to CCN Registration</a>
        </p>
      </section>

      <section>
        <h2>BNL Awards</h2>
        <p>
          The BNL Awards program recognizes the outstanding achievements of members,
          including Junior and Senior Mountain Bike and Road Cycling athletes,
          Outstanding Coach, and Outstanding Volunteer.
        </p>

        <article>
          <h3>2025 Season Award Winners</h3>
          <table>
            <thead>
              <tr>
                <th>Award Category</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {awards2025.map(([category, winner]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <strong>
              Congratulations to all winners, nominees, and members on an outstanding
              cycling season.
            </strong>
          </p>
        </article>
      </section>

      <News />

      <Footer>
      </Footer>
    </main>
  );
}
