import React from 'react';
import { Helmet } from 'react-helmet';

import Image from 'src/components/image';
import styles from '../styles.module.scss';

export default () => (
  <div className={styles.root}>
    <Helmet>
      <title>Design System</title>
    </Helmet>
    <header>
      <h4>Vaiva Rivas</h4>
      <h2>Created Design System for the Relay42 platform</h2>
      <p>Relay42</p>
    </header>
    <section>
      <Image
        img="/assets/relay42/main-header.png"
        alt="Design images"
        small="
          Close ups of the design system that shows different states of buttons
          and precise measurements of form controls and dropdows.
        "
      />
      <h3>Company</h3>
      <p>
        Relay42 provides an advanced tagging and data management software
        platform which enables online marketers to collect and manage valuable
        data fast, efficiently and across different channels.
      </p>

      <Image
        img="/assets/relay42/audit.png"
        alt="Audit"
        small="Audit of the platform."
      />
      <h3>Context and my role</h3>
      <p>
        When I joined, Relay42 was transitioning from a startup into a scaleup
        phase. The company and it’s ambitions in terms of product and new
        features development grew very fast. Development and engineering teams
        at that time were building 2 new modules for the platform and improving
        the current ones.
      </p>
      <p>
        As I was the first in-house designer in the company, I had to establish
        the role of UX Design within the product development process. I am an
        integral part of the Product team- my main role is to create each
        feature from research until developer handover- ensuring that although
        the product is complex, the style is unified and user-friendly.
      </p>
      <p>
        Having in mind company’s plans and seeing the current platform, I’ve
        decided to start working on a new Design System which would solve the
        majority of the inconsistency problems in the existing modules and also
        would set the path for the new ones that I was expected to design.
      </p>

      <Image
        img="/assets/relay42/form-exploration.png"
        alt="Form exploration"
        small="
          Form design exploration. Chose the middle one because a) the form is
          shorter; b) users often need to return to the form to make changes so
          it’s easier to review labels; c) Easier for a user to identify which
          label belongs to which input field.
        "
      />
      <h3>Design Challenges</h3>
      <p>
        One of the biggest tasks I had was to make the user interface consistent
        across different modules. I had to unify look and feel of the platform
        even though each module helps users to achieve different goals.
      </p>
      <p>
        The platform is mainly used by marketers who have a technical background
        and are used to the current flow/logic which was designed by developers.
        The challenge was to balance good design and UX with the habits of the
        existing users. We needed to create visually appealing interface with
        visual cues and information hierarchy that would also be usable and
        intuitive for marketers without technical background and also would be
        accepted by our power users.
      </p>

      <Image
        img="/assets/relay42/dropdown.png"
        alt="Dropdown behaviour"
        small="
          Dropdown behaviour: 1. User knows that they can type to search or type
          to create new; 2. User can place a cursor and it will suggest the most
          recent selections; 3. user can start typing to search for entries; 4. If
          a user cannot find an existing entry, they can create a new one; 5.
          “Create new” slides down; 6. Created entry is selected.
        "
      />
      <h3>Design Solutions</h3>
      <p>
        After researching about design systems and reviewing a few of them
        belonging to big companies like Atlassian, Polaris, etc- I have audited
        the whole platform. I examined and color coded all components, also
        noted down obvious logic and design errors. This helped me to know where
        I can find variations of each of them.
      </p>
      <p>
        I chose 4 the most complicated screens in our platform to redesign.
        These screens contained the most common items: forms, tables (most of
        the times, both) and had to include “create new” and edit
        functionalities. I have added visual cues and improved interactions that
        are understandable but also allows fast navigation for power users.
        Afterwards I designed the rest of the components.
      </p>

      <Image
        img="/assets/relay42/design-system.jpg"
        alt="Design System"
        small="Design system. Left to right: colors, buttons, dropdowns, form controls, tables, error states."
      />
      <p>
        In order to increase collaboaration with engineers and to be able to
        design new modules faster I have created a shared living Style Guide
        document in InVision and wrote guidelines how components should behave,
        added resources where possible.
      </p>
    </section>
  </div>
);
