import styles from './membership.module.css'

export default function Membership() {
    return (
        <main className={styles.page}>
            <header className={styles.hero}>
                <p className={styles.eyebrow}>Bicycle Newfoundland and Labrador</p>
                <h2 className={styles.title}>Membership and Insurance</h2>
                <p className={styles.subtitle}>
                    Choose the membership option that fits your riding goals and get the required
                    event coverage for 2026.
                </p>
                <div className={styles.welcomeHeader}>
                    <p>Welcome to all of our new and returning BNL Members!</p>
                    <p>
                        We will strive to keep all BNL Members informed about what is happening
                        in the Newfoundland and Labrador cycling community and upcoming races and
                        events. We will also include information on our Development Teams and
                        other benefits. Your BNL Membership also includes insurance coverage for
                        scheduled BNL rides and sanctioned events.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>2026 Membership Rates</h3>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">Type of Membership</th>
                                <th scope="col">Brief Description</th>
                                <th scope="col">2026 Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BNL Membership</td>
                                <td>
                                    Membership is valid from the date of purchase to the end of
                                    that calendar year. The BNL Membership provides access to
                                    insurance for BNL rides, and BNL sanctioned races and events in
                                    Newfoundland and Labrador.
                                    <br />
                                    <br />
                                    Proof of membership will be a digital card.
                                </td>
                                <td>
                                    Adult - $50
                                    <br />
                                    Youth - $35 (U17)
                                </td>
                            </tr>
                            <tr>
                                <td>BNL Membership &amp; UCI License Combined</td>
                                <td>
                                    Includes the BNL Membership benefits as well as an
                                    out-of-province, national and international license for
                                    competition.
                                    <br />
                                    <br />
                                    Proof of membership will be a digital card.
                                </td>
                                <td>
                                    Adult - $90
                                    <br />
                                    Youth - $45 (U17)
                                </td>
                            </tr>
                            <tr>
                                <td>Technical License</td>
                                <td>
                                    You may apply for a UCI Technical Licence if you are
                                    purchasing a BNL Membership &amp; UCI Licence and you are
                                    qualified with BNL as a Commissaire, Coach, Manager, Soigner or
                                    Organizer.
                                    <br />
                                    <br />
                                    Add on to BNL Membership &amp; UCI License Combined (no added
                                    charge).
                                </td>
                                <td>Add-on to combined membership (no added charge)</td>
                            </tr>
                            <tr>
                                <td>Day Pass</td>
                                <td>
                                    Provides insurance coverage for the day of the event only. No
                                    other benefits apply.
                                    <br />
                                    <br />
                                    If you do not have a BNL Membership or UCI License, the Day
                                    Pass must be purchased for each event/race in NL.
                                </td>
                                <td>
                                    Adult - $25 (per event)
                                    <br />
                                    Youth - $15 (U17) (per event)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <p className={styles.notice}>
                Please note, either a BNL Membership, UCI license or Day Pass is required for each
                BNL sanctioned event or race.
                <br />
                Waiver to be signed upon registration for each type of membership.
            </p>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Registration Help Contacts</h3>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">Organization</th>
                                <th scope="col">Contact Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CCN</td>
                                <td>
                                    info@ccnbikes.com
                                    <br />
                                    1-800-534-2453
                                </td>
                            </tr>
                            <tr>
                                <td>BNL</td>
                                <td>info@bicyclenl.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Summary of Membership Categories</h3>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">Category Benefit</th>
                                <th scope="col">BNL Membership</th>
                                <th scope="col">UCI Race License</th>
                                <th scope="col">UCI Technical License</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Participate in organized BNL training programs and group rides
                                </td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Race in BNL sanctioned races</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>
                                    Race in Cycling Canada sanctioned events (for example National
                                    Championships and Canada Cups)
                                </td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Race outside of NL or in UCI events</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>
                                    Take on a technical role (for example coach, commissaire,
                                    organizer, manager, mechanic, driver, agent, and more)
                                </td>
                                <td>No</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Insurance Information</h3>
                <div className={styles.contentStack}>
                    <p>
                        BFL CANADA, in partnership with Cycling Canada, offers a comprehensive
                        Cycling Insurance and Risk Management Program for governing bodies across
                        the country.
                    </p>
                    <p>
                        This program is designed to support Cycling Canada, Participating
                        Provincial and Territorial Associations (PPTAs), affiliated cycling clubs,
                        and their members. Coverage extends to all Cycling Canada and PPTA members
                        for approved and sanctioned activities confirmed through their provincial
                        associations.
                    </p>
                    <p>
                        Insurance is one method of handling claims when practical and
                        cost-effective. Cycling Canada has engaged an insurance carrier with policy
                        coverage in commercial general liability, directors and officers' liability,
                        and accidental death and dismemberment (AD&amp;D).
                    </p>
                    <p>
                        Read more:{' '}
                        <a
                            href="https://cyclingcanada.ca/resources/insurance1/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.inlineLink}
                        >
                            Cycling Canada Insurance Resource
                        </a>
                    </p>
                    <p>
                        Insurance provided to BNL members applies only during sanctioned
                        activities, including races, rides, and training offered by BNL. Cycling
                        outside those times does not qualify for coverage.
                    </p>
                    <p>
                        BNL members who want coverage for non-sanctioned activities can purchase
                        additional insurance during registration.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Extended Coverage Options (2026)</h3>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">Type of Insurance</th>
                                <th scope="col">Brief Description</th>
                                <th scope="col">2026 Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sanctioned Events + Non-Sanctioned Training</td>
                                <td>
                                    BNL members who want their individual training activities
                                    covered can purchase additional insurance to extend Sport
                                    Accident coverage to these activities.
                                </td>
                                <td>$25</td>
                            </tr>
                            <tr>
                                <td>Ride with Confidence - Anytime</td>
                                <td>
                                    BFL&apos;s 24/7 Participant Accident Coverage protects you while
                                    cycling beyond scheduled training sessions or sanctioned events,
                                    including commuting, school trips, and personal weekend rides.
                                    <br />
                                    <br />
                                    Coverage applies to personal, non-commercial cycling only.
                                    Food delivery, courier services, and other commercial bike use
                                    are not covered.
                                </td>
                                <td>$120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className={styles.notice}>Policy Period: January 1, 2026 to January 1, 2027.</p>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Cycling Coverage for Cycling Canada and PPTA Members</h3>
                <div className={styles.contentStack}>
                    <p>
                        BFL CANADA, together with Cycling Canada, provides exclusive insurance
                        coverage for Cycling Canada and PPTA members. Provinces not participating in
                        the PPTA (BC, Quebec, Nova Scotia) have separate programs with similar
                        coverage.
                    </p>
                    <p>
                        The comprehensive program is designed to protect sanctioned events and
                        activities, including:
                    </p>
                    <ul className={styles.bulletList}>
                        <li>Events</li>
                        <li>Cycling clubs and teams</li>
                        <li>Team members and players</li>
                        <li>Officials and managers</li>
                        <li>Directors and officers</li>
                        <li>Auxiliary workers</li>
                        <li>Employees</li>
                        <li>Volunteers</li>
                        <li>Administrators</li>
                    </ul>
                    <p>Sanctioned events and approved activities include (but are not limited to):</p>
                    <ul className={styles.bulletList}>
                        <li>Club rides and meetings</li>
                        <li>Competitions and races</li>
                        <li>Organized training camps</li>
                        <li>Seminars and clinics</li>
                        <li>Fundraising activities</li>
                        <li>National Team projects</li>
                    </ul>
                    <p>Cycling insurance coverage includes:</p>
                    <ul className={styles.bulletList}>
                        <li>
                            Commercial General Liability: $10M, including professional liability
                            for participants in organized sanctioned activities and events
                        </li>
                        <li>Sports accident, death and dismemberment insurance</li>
                        <li>
                            Directors and Officers (D&amp;O) insurance for national and provincial
                            boards
                        </li>
                    </ul>
                    <p>Who is insured (members in good standing):</p>
                    <ul className={styles.bulletList}>
                        <li>Member and member clubs</li>
                        <li>Managers</li>
                        <li>Coaches</li>
                        <li>Officials and referees</li>
                        <li>Staff</li>
                        <li>Volunteers</li>
                    </ul>
                    <p>
                        Participant accident policy applies to cycling within Canada only. If you
                        are traveling outside Canada, investigate travel insurance.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Cyclists&apos; Responsibility Code</h3>
                <div className={styles.contentStack}>
                    <p>
                        Cyclists, pedestrians, and motorists must coexist safely on the road. The
                        code below helps riders avoid crashes, share the road, and ride responsibly.
                    </p>
                    <ol className={styles.numberList}>
                        <li>
                            Stay in control at all times. Ride safely among others, stop fully when
                            needed, and avoid obstacles without harming yourself or others. Only
                            participate in events that match your fitness and ability.
                        </li>
                        <li>Be familiar with the course and surrounding environment.</li>
                        <li>
                            Do not ride on any course if you are not participating in that field or
                            event.
                        </li>
                        <li>
                            Obey all sport rules, event rules, signage, and instructions from
                            officials, marshals, security, and police.
                        </li>
                        <li>
                            Always wear an approved helmet while astride your bicycle during an
                            event.
                        </li>
                        <li>Use equipment you know and keep it in good working order.</li>
                        <li>
                            Do not stop where you may obstruct racing or where you are not visible
                            to oncoming riders.
                        </li>
                        <li>
                            Do not participate while under the influence of drugs or alcohol,
                            excessively fatigued, dizzy, or ill.
                        </li>
                        <li>
                            If you withdraw, clearly report to a commissaire or designated event
                            staff.
                        </li>
                        <li>
                            Understand the risks of the sport and read all documents before signing.
                        </li>
                    </ol>
                    <p className={styles.emphasisText}>
                        Know the code, be safety conscious, and keep yourself and others safe.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Cycling Canada and PPTA Insurance Program</h3>
                <div className={styles.contentStack}>
                    <p>
                        Why liability insurance? Even careful organizations can face claims. A
                        liability policy can fund legal defense and any awarded costs.
                    </p>
                    <p>Types of coverage:</p>
                    <ul className={styles.bulletList}>
                        <li>
                            Commercial General Liability: Covers compensatory damages for bodily
                            injury or property damage to others resulting from insured operations.
                        </li>
                        <li>
                            Sport Accident Insurance: Covers members injured during sanctioned
                            activities, including AD&amp;D and medical expenses. This policy is
                            secondary to other healthcare plans and medical expense coverage applies
                            within Canada only.
                        </li>
                    </ul>
                    <p>
                        <a
                            href="/documents/BFL_Cycling-Insurance-Program.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.inlineLink}
                        >
                            Cycling Canada and PPTA Insurance Program
                        </a>
                        .
                        <br />
                        <a
                            href="/documents/BFL_Sport-Accident-Claim-Form.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.inlineLink}
                        >
                            Sport Accident Claim Form
                        </a>
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Disclaimer and Reliance on Report</h3>
                <p>
                    This summary is provided for information purposes only. The insuring
                    agreements, terms, conditions, and exclusions of the actual policy govern how
                    coverage applies. In all cases, the policy documents supersede this summary.
                </p>
            </section>
        </main>
    )
}
