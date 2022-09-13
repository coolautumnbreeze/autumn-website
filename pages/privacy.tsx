import { useState } from "react";
import type { NextPage } from "next";
import { privacyFAQ } from "data";
import clsx from "clsx";
import { userInfo } from "os";

const Privacy: NextPage = () => {
  const [privacy, setPrivacyFAQ] = useState(privacyFAQ || []);
  const [currentPrivacyFAQIdx, setCurrentPrivacyFAQidx] = useState(0);

  return (
    <>
      <section className="relative py-20 bg-november-yellow">
        <div className="relative container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-8 mb-6 lg:mb-10 text-5xl font-semibold font-heading">
              We started with privacy, then built from there.
            </h2>
            <p className="mb-6 lg:mb-12 mt-16 text-lg font-base">
              Autumn is built on the framework, Privacy by Design, developed by
              the renowned Dr. Ann Cavoukian to address issues of privacy in a
              digital age. Privacy by Design is seen as a global best practice,
              and forms a foundation for the General Data Protection Regulation
              (GDPR).
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-2xl font-semibold font-heading">
              What does this mean practically?
            </h2>
            <p className="mb-12 text-md text-gray-500 text-justify">
              It means we put employee privacy first. Employee identity is
              always kept anonymous, and all personally identifying information
              is redacted from any and all data used in Autumn&apos;s analysis
              &mdash; protecting individual and company privacy.
            </p>
            <h2 className="mb-4 text-2xl font-semibold font-heading">
              How do we keep our privacy-first promise?
            </h2>
            <p className="mb-8 text-md text-gray-500">
              The following three practices help form our approach to protecting
              your individual privacy:
            </p>
            <ul className="mb-16 space-y-12">
              <li>
                <div className="flex mb-6 items-center">
                  <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-september-green rounded-full text-white font-semibold font-heading">
                    1
                  </span>
                  <h3 className="block text-lg font-heading">Double Opt-In</h3>
                </div>
                <p className="mb-4 text-md text-gray-500 text-justify">
                  All users must actively opt into the use of our features; we
                  never assume data can be shared. Users can opt-in to:
                </p>
                <ol>
                  <li>
                    <p className="mb-4 text-md text-gray-500 text-justify">
                      Providing Autumn&apos;s Slack Bot with access to some of
                      their Slack data, which is necessary for passive analysis.
                      If a user wishes to use Autumn without providing access to
                      their Slack or other data, they can &mdash; as an
                      alternative to passive analysis simple check-in questions
                      are regularly sent to the user in Slack once a week.
                    </p>
                  </li>
                  <li>
                    <p className="mb-4 text-md text-gray-500 text-justify">
                      Allowing their information to be included in a team
                      aggregate dashboard. If a user chooses not to have their
                      information included in a team aggregate, then they will
                      not be able to access the &apos;Team page&apos; or
                      otherwise view the data of any team they are invited to.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <div className="flex mb-4 items-center">
                  <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-october-red rounded-full text-white font-semibold font-heading">
                    2
                  </span>
                  <h3 className="block text-lg font-heading">
                    Data Aggregation
                  </h3>
                </div>
                <p className="mb-4 text-md text-gray-500 text-justify">
                  Autumn aggregates all user data before providing
                  aggregate-level insights to managers or People teams. Data is
                  never dis-aggregated past the level of a team, and all teams
                  must have 4 or more members opted-in, to ensure individual
                  anonymity. If a team has fewer than 4 members, the team
                  features can be made available if each user individually
                  consents, with an understanding that de-identification risk
                  also increases.
                </p>
              </li>
              <li>
                <div className="flex mb-4 items-center">
                  <span className="flex-shrink-0 flex mr-4 items-center justify-center w-8 h-8 bg-fall-blue rounded-full text-white font-semibold font-heading">
                    3
                  </span>
                  <h3 className="block text-lg font-heading">
                    Data De-Identification &amp; Anonymization
                  </h3>
                </div>
                <p className="mb-4 text-md text-gray-500 text-justify">
                  Autumn goes to great lengths to remove all{" "}
                  <strong>direct identifiers</strong> (names, SSNs, etc.) and{" "}
                  <strong>quasi-identifiers</strong> (ages, religion, race,
                  ethnicity, zodiac signs, etc.) from data prior to its use in
                  analysis, which ensures the privacy &amp; security of both
                  employees and organizations and reduces the possible risk of
                  bias or skewed results. <br />
                  <br />
                  This means all data is anonymized before it is ever processed.{" "}
                  <br /> <br /> For example, a message like{" "}
                  <span className="italic">
                    &quot;Hey Quinn, wanna go to In-n-Out for lunch
                    tomorrow?&quot;
                  </span>{" "}
                  is scrubbed into: &quot;Hey <strong>[NAME_1]</strong>, wanna
                  go to <strong>[LOCATION_1]</strong> for lunch tomorrow?&quot;
                  <br />
                  <br />
                  In addition, any data stored is then encrypted and under the
                  strictest safety protocols.
                </p>
              </li>
            </ul>
            <h2 className="mb-8 text-2xl font-semibold font-heading">
              Privacy FAQ
            </h2>
            <ul className="mb-16 space-y-4">
              {privacy.map((item: any, idx: any) => {
                return (
                  <li
                    id={idx}
                    key={idx}
                    onClick={(e) => setCurrentPrivacyFAQidx(idx)}
                    className="px-6 py-8 bg-gray-50 rounded-xl"
                  >
                    <button className="w-full flex justify-between items-center text-left font-semibold font-heading">
                      <span className="text-lg font-semibold font-heading">
                        {item.title}
                      </span>
                      <svg
                        className="flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.2498 10C19.2498 4.892 15.1088 0.75 9.99979 0.75C4.89179 0.75 0.749786 4.892 0.749786 10C0.749786 15.108 4.89179 19.25 9.99979 19.25C15.1088 19.25 19.2498 15.108 19.2498 10Z"
                          stroke="#00335c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.471 11.4423L9.99998 7.95626L6.52898 11.4423"
                          stroke="#00335c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>

                    <p
                      className={clsx(
                        {
                          hidden: idx !== currentPrivacyFAQIdx,
                        },
                        "max-w-4xl mt-4 text-md text-gray-500 text-justify"
                      )}
                    >
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className="mb-12 text-md text-gray-400 font-heading">
              Autumn was built for you. If you leave your company, you can keep
              your data and continue to use Autumn for yourself for free. Just
              email us at{" "}
              <a
                className="text-september-green"
                href="mailto:security@getautumn.com"
              >
                security@getautumn.com
              </a>{" "}
              and we&apos;ll make that happen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
