import React from 'react';
import CountUp from 'react-countup';

const Stats = ({count}) => {
    return (
      <div>
        {/* <div className="px-4 pb-12 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32"> */}
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center text-4xl mx-auto mb-3 rounded-full bg-accent p-1 w-fit">
                👥
              </div>
              <h6 className="text-4xl font-bold text-primary">
                <CountUp
                  start={0}
                  end={count.userCount}
                  duration={3}
                  enableScrollSpy
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h6>
              <p className="mb-2 font-bold text-md">Total Users</p>
              <p className="text-base-200">
                This number represents the total users who have registered on
                the TrueReview platform. These are individuals who have created
                an account to explore services, leave feedback, or add their own
                listings.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-3 rounded-full bg-accent p-1 w-fit">
                <span className="text-4xl">💼</span>
              </div>
              <h6 className="text-4xl font-bold text-primary">
                <CountUp
                  start={0}
                  end={count.serviceCount}
                  duration={3}
                  enableScrollSpy
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h6>
              <p className="mb-2 font-bold text-md">Services Listed</p>
              <p className="text-base-200">
                This count shows the total number of services that have been
                added to the platform. Each service is submitted by a user and
                includes useful details such as company information, pricing,
                and category.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center text-4xl mx-auto mb-3 rounded-full bg-accent p-1 w-fit">
                ⭐
              </div>
              <h6 className="text-4xl font-bold text-primary">
                <CountUp
                  start={0}
                  end={count.reviewCount}
                  duration={3}
                  enableScrollSpy
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h6>
              <p className="mb-2 font-bold text-md">Reviews Submitted</p>
              <p className="text-base-200">
                This figure indicates the number of reviews submitted by users
                across various services. Each review includes a rating and
                optional feedback, helping others make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stats;