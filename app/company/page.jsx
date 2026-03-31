import CompanyHeader from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CompanyHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cycling-600 to-cycling-700 px-4 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Bicycle Newfoundland and Labrador
          </h1>
          <p className="text-lg font-medium text-cycling-100">
            Promoting cycling excellence, advocacy, and community across the province
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            About
          </h2>

          <article className="mb-8 rounded-lg border border-cycling-200 bg-cycling-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-cycling-800">
              Constitution and By-laws
            </h3>
            <p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-medium text-cycling-600 hover:text-cycling-700 hover:underline"
              >
                View Constitution and By-laws Document (PDF)
                <span className="text-sm">↓</span>
              </a>
            </p>
          </article>

          <article className="mb-8 rounded-lg border border-cycling-200 bg-cycling-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-cycling-800">
              Volunteers
            </h3>
            <p className="mb-3 text-gray-700">
              Bicycle Newfoundland and Labrador (BNL) is run and organized by
              volunteers from across the province. As such, we always welcome help
              and support from anyone interested. We would love to have you join
              us!
            </p>
            <p className="mb-3 font-medium text-gray-800">
              The ways in which you can volunteer are diverse and varied such as:
            </p>
            <ul className="mb-4 space-y-2 pl-6 text-gray-700">
              <li className="list-disc">Sign on as a competitive cycling coach</li>
              <li className="list-disc">Volunteer in governance or committee work</li>
              <li className="list-disc">Help with events both Approved and Sanctioned</li>
              <li className="list-disc">Marshal races/events</li>
              <li className="list-disc">Organize sanctioned group rides</li>
              <li className="list-disc">Join the Board of Directors (annually at the AGM)</li>
            </ul>
            <p className="text-gray-700">
              If you see an area of interest where you would like to contribute,
              feel free to contact BNL at{" "}
              <a
                href="mailto:info@bicyclenl.com"
                className="font-medium text-cycling-600 hover:text-cycling-700 hover:underline"
              >
                info@bicyclenl.com
              </a>
            </p>
          </article>

          <article className="mb-8 rounded-lg border border-cycling-200 bg-cycling-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-cycling-800">
              Advocacy
            </h3>
            <p className="mb-3 text-gray-700">
              Bicycle Newfoundland and Labrador (BNL) is engaged in several
              advocacy initiatives at local, provincial, and federal levels
              including:
            </p>
            <ul className="space-y-2 pl-6 text-gray-700">
              <li className="list-disc">
                Support for effective cycling infrastructure throughout the
                province
              </li>
              <li className="list-disc">Assist in the National Active Transportation Strategy</li>
              <li className="list-disc">
                Aid the federal E-bike regulation, education programs and rebate
                programs
              </li>
              <li className="list-disc">
                Continued development of the Newfoundland T&apos;Railway for cycling
              </li>
              <li className="list-disc">
                Help in the development of mountain bike infrastructure in Pippy
                Park
          <article className="mb-8 rounded-lg border border-cycling-200 bg-cycling-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-cycling-800">
              Bicycle Safety Campaign – One Metre Rule
            </h3>
            <p className="mb-3 text-gray-700">
              In 2018 Bicycle Newfoundland and Labrador (BNL) successfully lobbied
              the provincial government to pass legislation regarding the "One
              Metre Rule". On March 5, 2019, the Highway Traffic Act was amended
              to increase safety on our province's roads and highways. The changes
              included the introduction of a "One Metre Rule" aimed at the
              protection of cyclists and pedestrians.
            </p>
            <p className="mb-3 text-gray-700">
              The rule means that the driver of a motor vehicle is required to
              leave one metre of open space between the vehicle and bicycle (or
              pedestrian) on highways with posted speed limits of 60 kilometres
              per hour or less. The required distance is one and a half metres for
              highways with posted speed limits greater than 60 kilometres per
              hour.
            </p>
            <p className="mb-3 text-gray-700">
              Safety is a major concern among bicycle riders in this province. The
              legislation will increase safety for both bicycle riders and
              motorists by providing a legal definition of safe passing clearance
              between cyclists and vehicles.
            </p>
            <p className="text-gray-700">
              In passing this law, Newfoundland and Labrador joined other
              provinces (Ontario, Quebec, Nova Scotia, New Brunswick and Prince
              Edward Island) with similar legislation. Newfoundland and Labrador
              is now on board to make our roads safer for everyone!
            </p>
              provinces (Ontario, Quebec, Nova Scotia, New Brunswick and Prince
            Edward Island) with similar legislation. Newfoundland and Labrador
            is now on board to make our roads safer for everyone!
          </p>
          <article className="mb-8 rounded-lg border border-cycling-200 bg-cycling-50 p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-cycling-800">
              T&apos;Railway
            </h3>
            <p className="mb-3 text-gray-700">
              The Newfoundland T&apos;Railway forms part of the Trans Canada Trail
              system and covers a distance of 883 km (549 mi). Known as the
              "Newfoundland T&apos;Railway Provincial Park", the rail bed route links
              urban, rural and wilderness areas. The park forms the Newfoundland
              section of the Trans Canada Trail stretching from St. John&apos;s to
              Victoria, BC, and to Tuktoyaktuk, NWT. When complete, the Trans
              Canada Trail will extend for more than 22,000 km, making it the
              longest continuous trail in the world.
            </p>
            <p className="mb-3 text-gray-700">
              Protected as a linear park under the provincial park system, the
              Newfoundland T&apos;Railway consists of the rail bed of the historic
              Newfoundland Railway. The rail corridor stretches from
              Channel-Port aux Basques in the west to St. John&apos;s in the east with
              branches to Stephenville, Lewisporte, Bonavista, Placentia and
              Carbonear.
            </p>
            <p className="mb-3 text-gray-700">
              Cycling the Newfoundland T&apos;Railway is an adventure for avid cyclists
              who appreciate the many natural wilderness settings that the
              province has to offer.
            </p>
            <p className="mb-2 font-medium text-gray-800">Resources:</p>
            <ul className="mb-4 space-y-1 pl-6 text-gray-700">
              <li className="list-disc">
                <a
                  href="https://en.wikipedia.org/wiki/T%27Railway"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
                  Learn About T&apos;Railway on Wikipedia
                </a>
              </li>
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
                  Slow Biker's Article: Across Newfoundland by Fatbike
                </a>
              </li>
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
                  Newfoundland T&apos;Railway Guide on Bikepacking.com
                </a>
              </li>
            </ul>
            <p className="mb-3 text-gray-700">
        </section>

        {/* Strategic Plan Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            Strategic Plan
          </h2>
          <div className="rounded-lg border-l-4 border-l-cycling-500 bg-cycling-50 p-6">
            <p className="mb-3 text-gray-700">
              The current strategic plan will be updated as it expires in 2026.
            </p>
            <p className="text-gray-700">
              Plan Link:{" "}
        {/* Policies Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            Policies
          </h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <p className="mb-4 text-gray-700">
              Current BNL policies will be listed and updated here as they are
              revised.
            </p>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
        {/* Financial Reports Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            Financial Reports
          </h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
        {/* AGM Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            Annual General Meeting (AGM) and Financial Statements
          </h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <p className="mb-4 text-gray-700">
              This section tracks the history of financial statements and reports
              presented at BNL&apos;s Annual General Meeting.
            </p>
            <p className="mb-4 font-medium text-cycling-900">
              <strong>2026 AGM Date:</strong> TBD (Fall 2026)
            </p>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
                  2025 AGM Report (PDF)
                </a>
              </li>
              <li className="list-disc">
                <a
                  href="#"
                  className="text-cycling-600 hover:text-cycling-700 hover:underline"
                >
                  2024 AGM Report (PDF)
                </a>
              </li>
            </ul>
          </div>
              </p>
              <a href="https://www.trailway.ca/">Trailway.ca</a>
          </p>
        </article>
      </section>

      <section>
        {/* Membership Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            BNL Membership
          </h2>
          <div className="rounded-lg bg-gradient-to-r from-cycling-50 to-trail-50 p-6">
            <p className="mb-4 text-gray-700">
              Register or renew your BNL membership through the current Cycling
              Canada Network (CCN) registration system.
            </p>
            <a
        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            BNL Awards
          </h2>
          <p className="mb-6 text-gray-700">
            The BNL Awards program recognizes and honors the outstanding
            achievements of our members. We present awards to the Junior and
            Senior Male and Female Athletes of the Year in Mountain Bike and Road
            Cycling, Outstanding Coach of the Year, and Outstanding Volunteer of
            the Year.
          </p>

          <article>
            <h3 className="mb-4 text-2xl font-semibold text-cycling-800">
              2025 Season Award Winners
            </h3>
            <div className="overflow-x-auto rounded-lg border border-cycling-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-cycling-200 bg-cycling-600 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Award Category</th>
                    <th className="px-4 py-3 text-left font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cycling-100 hover:bg-cycling-50">
                    <td className="px-4 py-3 text-gray-700">
                      Junior Female Mountain Bike Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Lydia Parsons
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 bg-cycling-50 hover:bg-cycling-100">
                    <td className="px-4 py-3 text-gray-700">
                      Junior Male Mountain Bike Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Ian Organ
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 hover:bg-cycling-50">
                    <td className="px-4 py-3 text-gray-700">
                      Junior Female Road Cycling Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Portia Curnoe-Afanassiev
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 bg-cycling-50 hover:bg-cycling-100">
                    <td className="px-4 py-3 text-gray-700">
                      Junior Male Road Cycling Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Lincoln Harris
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 hover:bg-cycling-50">
                    <td className="px-4 py-3 text-gray-700">
                      Senior Female Mountain Bike Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Sophie Cote
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 bg-cycling-50 hover:bg-cycling-100">
                    <td className="px-4 py-3 text-gray-700">
                      Senior Male Mountain Bike Athlete of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
        {/* News Section */}
        <section className="mb-12">
          <h2 className="mb-6 border-b-4 border-cycling-500 pb-3 text-3xl font-bold text-cycling-900">
            News
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Latest news from Bicycle Newfoundland and Labrador:
          </p>
          <ul className="mb-8 space-y-3">
            {["News Item 1", "News Item 2", "News Item 3", "News Item 4", "News Item 5"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-lg border-l-4 border-l-cycling-400 bg-cycling-50 px-4 py-3 text-gray-700"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-cycling-500"></span>
                  {item}
                </li>
              )
            )}
          </ul>
          <button
            type="button"
            className="rounded-lg bg-cycling-600 px-6 py-3 font-semibold text-white transition hover:bg-cycling-700"
          >
            View All News
          </button>
        </section>
      </div      <td className="px-4 py-3 font-medium text-gray-900">
                      Eric Stock
                    </td>
                  </tr>
                  <tr className="border-b border-cycling-100 hover:bg-cycling-50">
                    <td className="px-4 py-3 text-gray-700">
                      Outstanding Volunteer of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Gillian Russell
                    </td>
                  </tr>
                  <tr className="bg-cycling-50 hover:bg-cycling-100">
                    <td className="px-4 py-3 text-gray-700">
                      Outstanding Coach of the Year
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Mick Cutler
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 rounded-lg bg-trail-50 p-4 text-center font-semibold text-cycling-800">
              Congratulations to all winners, nominees and members on an
              outstanding cycling season!!
            </p>
          </article>
            achievements of our members. We present awards to the Junior and
          Senior Male and Female Athletes of the Year in Mountain Bike and Road
          Cycling, Outstanding Coach of the Year, and Outstanding Volunteer of
          the Year.
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
              <tr>
                <td>Junior Female Mountain Bike Athlete of the Year</td>
                <td>Lydia Parsons</td>
              </tr>
              <tr>
                <td>Junior Male Mountain Bike Athlete of the Year</td>
                <td>Ian Organ</td>
              </tr>
              <tr>
                <td>Junior Female Road Cycling Athlete of the Year</td>
                <td>Portia Curnoe-Afanassiev</td>
              </tr>
              <tr>
                <td>Junior Male Road Cycling Athlete of the Year</td>
                <td>Lincoln Harris</td>
              </tr>
              <tr>
                <td>Senior Female Mountain Bike Athlete of the Year</td>
                <td>Sophie Cote</td>
              </tr>
              <tr>
                <td>Senior Male Mountain Bike Athlete of the Year</td>
                <td>Austin Whelan</td>
              </tr>
              <tr>
                <td>Senior Female Road Cycling Athlete of the Year</td>
                <td>Stephanie Nevin</td>
              </tr>
              <tr>
                <td>Senior Male Road Cycling Athlete of the Year</td>
                <td>Eric Stock</td>
              </tr>
              <tr>
                <td>Outstanding Volunteer of the Year</td>
                <td>Gillian Russell</td>
              </tr>
              <tr>
                <td>Outstanding Coach of the Year</td>
                <td>Mick Cutler</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>
              Congratulations to all winners, nominees and members on an
              outstanding cycling season!!
            </strong>
          </p>
        </article>
      </section>

      <section>
        <h2>News</h2>
        <p>Latest news from Bicycle Newfoundland and Labrador:</p>
        <ul>
          <li>News Item 1</li>
          <li>News Item 2</li>
          <li>News Item 3</li>
          <li>News Item 4</li>
          <li>News Item 5</li>
        </ul>
        <button type="button">View All News</button>
      </section>

      <footer>
        <p>Footer content (same as Home page)</p>
      </footer>
    </main>
  );
}