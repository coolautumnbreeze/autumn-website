import type { NextPage } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { testimonialCopy } from "data";
import { useState } from "react";

const Home: NextPage = () => {
  const [testimonials, setTestimonials] = useState(testimonialCopy || []);
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  return (
    <>
      {/* Jumbotron */}
      <section id="jumbotron" className="pb-20">
        <div className="container px-4 mx-auto pt-12">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <h2 className="mt-8 mb-6 lg:mb-12 text-5xl lg:text-5xl font-bold font-heading">
                Understand your remote employees without the hassle of surveys.
              </h2>
              <div className="max-w-lg mb-6 lg:mb-12">
                <p className="text-lg text-gray-500">
                  Build a culture your people won&apos;t want to leave by
                  passively measuring engagement and burnout risk, and empower
                  your people to take action in real-time.
                </p>
              </div>
              <div className="flex flex-wrap">
                <Link href="https://getautumn.app/register">
                  <a
                    className="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-september-green text-white rounded transition duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get started for free
                  </a>
                </Link>
                <Link href="https://calendly.com/quinnunderwood/autumn-demo-with-quinn">
                  <a
                    className="inline-block px-6 py-4 mb-3 text-sm font-medium leading-normal rounded border"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a demo
                  </a>
                </Link>
              </div>
              <div className="max-w-lg mt-3 lg:mb-12">
                <p className="text-sm text-gray-500">
                  No credit card required.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 px-4">
              <img
                className="relative"
                src="assets/images/jumbotron-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Logo */}
      <section id="logo_list" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 lg:w-1/5 p-4">
              <div className="py-4">
                <img
                  className="h-10 w-56 mt-3 mx-auto"
                  src="assets/images/logos/cover.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5 p-4">
              <div className="py-4">
                <img
                  className="h-12 w-56 mx-auto"
                  src="assets/images/logos/notch.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5 p-4">
              <div className="py-4">
                <img
                  className="h-12 w-56 mx-auto"
                  src="assets/images/logos/surf.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 p-4">
              <div className="py-4">
                <img
                  className="mx-auto"
                  src="assets/images/logos/golden.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5 p-4">
              <div className="py-4">
                <img
                  className="h-12 w-56 mx-auto"
                  src="assets/images/logos/hyperplane.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Competive Advantage */}
      <section id="what_is_autumn" className="relative bg-fall-blue py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-5 md:mb-5 text-4xl lg:text-4xl leading-10 font-semibold font-heading text-white text-center">
            Preventing turnover starts with understanding, and ends in action.
          </h2>
          <h2 className="mb-8 md:mb-16 text-xl lg:text-xl leading-10 font-semibold font-heading text-white text-center">
            Autumn helps you and your people leaders do both.
          </h2>
          <div className="inline-block md:px-56 mb-6 md:mb-0 space-y-10 text-center">
            <p className="text-lg font-light text-white">
              Autumn analyzes existing data sources in your workplace like
              calendars, chat messages, and email to give you insights on how
              your team is feeling, and what to do about it, without sacrificing
              privacy. Backed by expert research in Pyschology and Artificial
              Intelligence from the University of Toronto, Cambridge, and
              Stanford.
            </p>

            <p className="text-lg md:px-40 text-white font-light text-center">
              Autumn is built on Privacy-by-design principles &mdash; so your
              privacy is always protected.{" "}
              <span className="text-md mt-10 text-november-yellow hover:underline font-light">
                <Link href="/privacy">
                  <a className="cursor-pointer">
                    Learn more <FaArrowRight className="inline h-3 w-3" />
                  </a>
                </Link>
              </span>
            </p>
          </div>
          {/* <div className="flex flex-wrap items-center text-white">
            <div className="inline-block max-w-5xl mb-6 md:mb-0 space-y-5">
              <p className="text-lg font-light text-white">
                Autumn analyzes your calendar, syntax and grammar, and
                communication data to give your insights on how your team is
                feeling, and what you can do about it, all while protecting
                privacy. Backed by research from the University of Toronto,
                Cambridge, and Stanford.
              </p>

              <p className="text-lg text-gray-300 font-light">
                Learn how we balance actionability with protecting your team’s
                privacy.
              </p>
              <a
                className="inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                href="#"
              >
                See our privacy framework
              </a>
            </div>
          </div> */}

          {/* Core Value Proposition */}
          <div className="flex flex-wrap -mx-3 mt-36 mb-6">
            <div className="w-full md:w-1/2 lg:w-1/3 px-8 mb-6">
              <div className="text-center px-1">
                <span className="flex items-center justify-center mx-auto mb-8 md:mb-12 w-40 h-40">
                  <img
                    className="h-28 mx-auto"
                    src="assets/images/03-charts-graph-stock-data-portfolio-finance-financial@8x.png"
                    alt=""
                  />
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading text-white">
                    Optional surveys
                  </h3>
                  <p className="font-light text-white text-center">
                    Save hundreds of hours by doing away with surveys. Autumn
                    integrates seamlessly with your existing tools, like Slack,
                    Calendar, and Email to passively measure performance and
                    well-being trends across your teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-8 mb-6">
              <div className="text-center px-1">
                <span className="flex items-center justify-center mx-auto mb-8 md:mb-12 w-40 h-40">
                  <img
                    className="h-28 mx-auto"
                    src="assets/images/07-solution-puzzle-explain-resolve-assist-solve-answer@8x.png"
                    alt=""
                  />
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading text-white">
                    Coaching in the flow of work
                  </h3>
                  <p className="font-light text-white text-center">
                    Empower your people leaders with expert-curated resources
                    and recommendations automatically tailored to the needs of
                    their teams. Save time and money on manager trainings.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-8 mb-6">
              <div className="text-center px-1">
                <span className="flex items-center justify-center mx-auto mb-8 md:mb-12 w-40 h-40">
                  <img
                    className="h-28 mx-auto"
                    src="assets/images/08-relationship-hands-help-team-people-helping-together@8x.png"
                    alt=""
                  />
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading text-white">
                    Make everyone a change agent
                  </h3>
                  <p className="font-light text-white text-center">
                    Support managers as they drive performance and prevent
                    turnover. Empower employees with resources and insights to
                    build the behaviours important to your organization at every
                    level of the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how_it_works" className="relative py-24 mt-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full lg:w-1/2 px-4 pt-[6rem] lg:pt-0 flex items-center justify-center order-last lg:order-first">
              <img
                src="assets/images/journey-1.png"
                className="-mt-24 lg:-ml-20"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <div className="max-w-4xl">
                <h2 className="mb-10 lg:mb-24 text-4xl font-semibold font-heading leading-10">
                  Start preventing burnout in a few simple steps.
                </h2>
                <div className="relative flex flex-wrap -mx-4 -mb-12">
                  <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:-mt-8">
                    <span className="flex items-center justify-center w-12 h-12 mb-6 lg:mb-8 rounded-full bg-november-yellow text-white font-semibold text-sm">
                      1
                    </span>
                    <h3 className="mb-4 text-xl font-medium font-heading">
                      Set Your Baseline
                    </h3>
                    <p className="text-lg text-left font-light text-gray-500">
                      Onboard in less than 5 minutes. Get immediate insight into
                      your own well-being, performance readiness, and burnout
                      risk. Then, invite your team to do the same.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 mb-12">
                    <span className="flex items-center justify-center w-12 h-12 mb-6 lg:mb-8 rounded-full bg-fall-blue text-white font-semibold text-sm">
                      2
                    </span>
                    <h3 className="mb-4 text-xl font-medium font-heading">
                      Integrate the tools you use the most
                    </h3>
                    <p className="text-lg text-left font-light text-gray-500">
                      Connect your Slack workspace and calendar to begin
                      measuring trends in how you and your team are doing, so
                      you can identify issues before they become fires. All
                      without surveys.
                    </p>
                  </div>
                  <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:-mt-8">
                    <span className="flex items-center justify-center w-12 h-12 mb-6 lg:mb-8 rounded-full bg-september-green font-semibold text-white text-sm">
                      3
                    </span>
                    <h3 className="mb-4 text-xl font-medium font-heading">
                      Track trends and take action
                    </h3>
                    <p className="text-lg text-left font-light text-gray-500">
                      Get recommendations written by experts, tailored to the
                      needs of your team. The more you and your team use Autumn,
                      the more relevant your recommendations will become.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 mb-12">
                    <span className="flex items-center justify-center w-12 h-12 mb-6 lg:mb-8 rounded-full bg-october-red font-semibold text-white text-sm">
                      4
                    </span>
                    <h3 className="mb-4 text-xl font-medium font-heading">
                      People-first results
                    </h3>
                    <p className="text-lg text-left font-light text-gray-500">
                      From your 1-on-1&apos;s to all-hands, use Autumn to foster
                      trust and connection and help your team feel heard and
                      supported. Because you shouldn&apos;t have to choose
                      between performance and well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            {/* Back */}
            <button
              onClick={(e) =>
                setCurrentTestimonialIdx((prev) =>
                  prev > 0 ? prev - 1 : testimonials.length - 1
                )
              }
              className="hidden lg:block w-14 h-14 rounded-full border hover:bg-gray-50"
            >
              <svg
                className="mx-auto"
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.30024 6.25122L18.2502 6.25122"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.30029 1.25024L1.36329 6.25124L9.30029 11.2522L9.30029 1.25024Z"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="max-w-3xl mx-auto flex flex-wrap items-center">
              <div className="w-full lg:w-2/5 mb-6 lg:mb-0 flex flex-wrap items-center justify-between">
                <div>
                  {/* <img
                    className="mb-6 h-14 w-14 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt=""
                  /> */}
                  <p className="mb-2 text-2xl font-semibold font-heading">
                    {testimonials[currentTestimonialIdx].author}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentTestimonialIdx].position}
                  </p>
                </div>
                <div className="lg:hidden pt-4">
                  <button
                    onClick={(e) =>
                      setCurrentTestimonialIdx((prev) =>
                        prev > 0 ? prev - 1 : testimonials.length - 1
                      )
                    }
                    className="w-12 h-12 mr-2 rounded-full border hover:bg-gray-50"
                  >
                    <svg
                      className="mx-auto"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12L5 12"
                        stroke="#556B7A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 19L5 12L12 5"
                        stroke="#556B7A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={(e) =>
                      setCurrentTestimonialIdx(
                        (prev) => (prev + 1) % testimonials.length
                      )
                    }
                    className="w-12 h-12 rounded-full border hover:bg-gray-50"
                  >
                    <svg
                      className="mx-auto"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L19 12"
                        stroke="#556B7A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="#556B7A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <span className="inline-block mb-5">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 29.45C26 19.3858 33.4577 8.86747 45.2297 6.16443C45.6793 6.0612 46.1364 6.29467 46.3301 6.71327L47.5161 9.27572C47.7602 9.80299 47.5031 10.4238 46.9877 10.692C43.3044 12.608 40.1644 17.1966 39.3647 20.8059C39.2493 21.3268 39.6241 21.8042 40.1413 21.9351C44.6581 23.0784 48 27.1681 48 32.042C48 38.406 42.832 42 37.602 42C31.572 42 26 37.39 26 29.45ZM0 29.45C0 19.3858 7.45772 8.86747 19.2297 6.16443C19.6793 6.0612 20.1364 6.29467 20.3301 6.71327L21.5161 9.27572C21.7602 9.80299 21.5031 10.4238 20.9877 10.692C17.3044 12.608 14.1644 17.1966 13.3647 20.8059C13.2493 21.3268 13.6241 21.8042 14.1413 21.9351C18.6581 23.0784 22 27.1681 22 32.042C22 38.406 16.832 42 11.602 42C5.572 42 0 37.39 0 29.45Z"
                      fill="#eb5e1c"
                    ></path>
                  </svg>
                </span>
                <p className="text-2xl font-light text-gray-500">
                  {testimonials[currentTestimonialIdx].text}
                </p>
              </div>
            </div>
            <button
              // next
              onClick={(e) =>
                setCurrentTestimonialIdx(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="hidden lg:block w-14 h-14 rounded-full border hover:bg-gray-50"
            >
              <svg
                className="mx-auto"
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.69976 6.74878L0.749756 6.74878"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.69971 11.7498L17.6367 6.74876L9.69971 1.74776V11.7498Z"
                  stroke="#838EA4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mb-24 mx-auto text-center">
            <h2 className="mt-8 mb-10 text-4xl font-bold font-heading">
              From preventing burnout to building trust, build a healthier team
              with Autumn
            </h2>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-10 lg:-mb-16">
            {/* Feature Item */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  Privacy By Design
                </h3>
                <p className="text-md text-gray-500 font-light">
                  Autumn implements the best practices in privacy and
                  information security to protect data.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  Simple &amp; Interactive Dashboard
                </h3>
                <p className="text-md text-gray-500 font-light">
                  Click through your dashboard to see which behaviours impact
                  your team&apos;s well-being and performance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  Personalized Recommendations
                </h3>
                <p className="text-md text-gray-500 font-light">
                  Get expert recommendations on how to effectively support your
                  team when they need it the most.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  In-Slack Summaries
                </h3>
                <p className="text-md text-gray-500 font-light">
                  Get reports on trends, burnout risk, and relevant
                  recommendations directly in Slack every week.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  Calendar Insights
                </h3>
                <p className="text-md text-gray-500 font-light">
                  See how much time your team spends in meetings or deep work
                  and its impact on well-being.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 border rounded-lg text-center hover:border-white hover:shadow-2xl">
                <h3 className="mb-6 text-xl font-medium font-heading">
                  Passive Analysis
                </h3>
                <p className="text-md text-gray-500 font-light">
                  Autumn&apos;s AI uses Slack data to identify trends in your
                  well-being based on changes in grammar &amp; syntax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="footer_cta" className="relative py-20 lg:py-40 bg-fall-blue">
        <img
          className="hidden lg:block lg:absolute top-0 left-0 mt-32"
          src="assets/zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
        />
        <img
          className="h-16 mt-4 ml-auto lg:hidden"
          src="assets/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <img
          className="hidden lg:block lg:absolute top-0 right-0 mt-64"
          src="assets/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-8 mb-6 lg:mb-10 text-4xl text-white font-semibold">
              Think Autumn might be a good fit but want to learn more?
            </h2>
            <p className="mb-6 lg:mb-12 text-lg text-white">
              Set up a demo to receive a walk through.
            </p>
            <Link href="https://calendly.com/quinnunderwood/autumn-demo-with-quinn">
              <a
                className="inline-block w-full md:w-auto mb-2 py-4 px-8 text-sm font-medium leading-normal border bg-november-yellow border-november-yellow cursor-pointer rounded"
                target="_blank"
                rel="noreferrer"
              >
                Book a demo
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
