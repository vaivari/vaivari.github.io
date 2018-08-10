import React from 'react';

import styles from '../styles.module.scss';

export default () => (
  <div className={styles.root}>
    <header>
      <h4>Vaiva Rivas</h4>
      <h2>Redesigned Customer Journey module</h2>
      <p>Relay42</p>
    </header>
    <section>
      <div className={styles['big-image-wrapper']}>
        <div
          className={styles['big-image']}
          style={{
            backgroundImage: 'url(/assets/customer-journey/hero-image.png)'
          }}
        />
      </div>
      <small>Customer journey screen</small>

      <h3>Company</h3>
      <p>
        Relay42 provides an advanced tag and data management software platform
        which enables online marketers to collect and manage valuable data fast,
        efficiently and across channels.
      </p>

      <div
        className={styles['small-image']}
        style={{
          backgroundImage: 'url(/assets/customer-journey/cj-overview.jpg)'
        }}
      />
      <small>Customer Journey overview explorations</small>
      <h3>Context and my role</h3>
      <p>
        When I joined, Relay42 was transitioning from a startup to a scaleup
        phase. The company and it’s ambitions in terms of product and new
        features development grew very fast. There was a work in progress of
        building 2 new modules for the platform and improvement works for the
        current ones.
      </p>
      <p>
        As I was the first in-house designer in the company I had to establish
        the UX/UI Design place in the product development processes. I was and
        still am an integral part of the Product team. My main role is to create
        each feature from the beginning till the end and ensuring that although
        the product is complex, the style is unified and user-friendly.
      </p>
      <p>
        While building the Design System I simultaniously was redesigning the
        new start module Customer Journey. This module is very complex because
        it connects all and provides functinality of some existing modules.
      </p>

      <div
        className={styles['small-image']}
        style={{ backgroundImage: 'url(/assets/customer-journey/cj-flow.jpg)' }}
      />
      <small>
        Left: create a new journey flow. Right: view statistics of a step/node
        flow
      </small>
      <h3>Design Challenges</h3>
      <p>
        During the first meeting with stakeholders that I held to identify the
        main goals and requirements for this module, it became clear that the
        Customer Journey module has to provide a good overview of what’s
        happening in the journey: a) who is being targeted through what
        channels/partners; b) if there is a split, which user flow is doing
        better; c) what is the goal of a journey and what are the results.
      </p>
      <p>
        Also the module has to give an ability to dig deeper and see more
        details in terms of set up and results. Marketers should be able to see
        statistics and identify what channel or message is not working well for
        the customers and give the answer why. Statistics and analytics are
        required for each step.
      </p>

      <div
        className={styles['small-image']}
        style={{ backgroundImage: 'url(/assets/customer-journey/kalina.jpg)' }}
      />
      <small>
        We discussed and then voted to decide what client needs are the most
        important. All the requirements that the module needs to fulfil were
        written by everyone beforehand.
      </small>

      <p>
        As Customer Journey module is a very powerful tool I needed to find the
        balance between complexity and simplicity. Our users need to know what
        features are at their disposal, but also I didn’t want to overwhelm them
        with too many options. Therefore I had many interviews and group
        discussions with consultants and clients to understand what decisions
        marketers need to make at each step while creating or evaluating the
        performance of a customer journey.
      </p>
      <p>
        Onboarding was another major UX challenge since I needed to show new
        users not only how to create customer journeys, but also how to get the
        most out of this complex tool. After observing a few onboarding
        workshops that are held by our consultants to new clients I was tasked
        to create an onboarding experience that would serve as a reminder and
        would guide a new user who is trying to build a new journey for the
        first time.
      </p>

      <div
        className={styles['small-image']}
        style={{
          backgroundImage:
            'url(/assets/customer-journey/cj-overview-explained.jpg)'
        }}
      />
      <small>Customer Journey screen explained</small>

      <h3>Design Solutions</h3>

      <p>
        I knew that for our clients the most important thing are numbers: how
        many customers were targeted and what are the results. Total number is
        visible at the very top of the screen and Goal are placed on the right
        hand side to signify the end of the customer journey. This part can be
        hidden in case a marketeer is building customer journey and need more
        working space.
      </p>
      <p>
        We are proud of our platform’s ability to show data movement in
        real-time, therefor I’ve decided to show visually customer movement from
        one step to another. The journey starts on the left side of the screen.
      </p>
      <p>
        If a marketer wants to have a better look at what’s happening in a
        specific step of the journey, they can click on it and have data of what
        is the current situation and analyse it historically.
      </p>

      <div
        className={styles['small-image']}
        style={{
          backgroundImage:
            'url(/assets/customer-journey/audience-explained.jpg)'
        }}
      />
      <small>First part of creating a new step in a customer journey</small>

      <p>
        The power of the module lies in the ability to set very granular rules
        of what kind of customers the marketer wants to target in a specific
        step. Users have an ability to add rules, edit a single rule while still
        being able to review the ones that are set and before going forward
        marketer can view a summary of all rules that were set. Afterwards, they
        can choose what kind of action they want the selected audience to take.
        For a better focus on the task at hand, it was decided to have a
        progress bar in the step creation process.
      </p>

      <div
        className={styles['small-image']}
        style={{
          backgroundImage: 'url(/assets/customer-journey/onboarding.jpg)'
        }}
      />

      <small>
        Onboarding tips guide user to create a goal first and then start
        building customer journey
      </small>

      <p>
        For onboarding, I took into account that all new clients undergo a
        training session and also best practice is to let users learn by doing
        hence I decided to guide a user with UI, tips and explanations that
        disappear after the first use or when a user clicks “got it”.
      </p>
    </section>
  </div>
);
