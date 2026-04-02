import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import News from "@/components/News";

export default function events() {

    return (
        <main>
            <header>
                <h1><b>NEWFOUNDLAND AND LABRADOR CYCLING EVENTS</b></h1>
            </header>

            <section><br />
                <p>
                    Bicycle Newfoundland and Labrador (BNL) offers Approved and Sanctioned events in multiple disciplines throughout the year for all cycling levels and all ages.
                    Below is the TENTATIVE SCHEDULE.  If any races, dates or locations change, we will post on our website as well on the BNL Facebook page.
                    Our racing organizers are working hard to ensure these races are held each year – please register early for the events as it is helpful to the organizers when preparing for the races.
                </p>
            </section> <br />

            <section>
                <p>
                    <b>Events Table</b>
                </p>
            </section><br />
           
            <section>
                <p>
                    <b>Results</b>
                </p>
            </section><br />

            <section>
                <p>
                    <b>Event Forms</b>
                </p>
            </section><br />


            <Membership /><br />
            <News /><br />
            <Contact /><br />
            <Footer />

        </main>
    );
}