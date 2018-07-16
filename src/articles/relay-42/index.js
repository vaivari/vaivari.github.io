import React from 'react';

import styles from '../styles.module.scss';

export default () => (
  <div className={styles.root}>
    <header>
      <h4>Vaiva Rivas</h4>
      <h2>Created Design System for the Relay42 platform</h2>
      <p>Relay42</p>
    </header>
    <section>
      <div className={styles['big-image-wrapper']}>
        <div
          className={styles['big-image']}
          style={{ backgroundImage: 'url(/assets/relay42/main-header.png)' }}
        />
      </div>
      <h3>Company</h3>
      <p>
        Relay42 provides an advanced tag and data management software platform
        which enables online marketers to collect and manage valuable data fast,
        efficiently and across channels.
      </p>

      <div
        className={styles['small-image']}
        style={{ backgroundImage: 'url(/assets/relay42/audit.png)' }}
      />
      <h3>Context and my role</h3>
      <p>
        I joined Relay42 in May 2017 and I’m the first and only designer in the
        company. I have established the UX/UI Design place in the product
        development processes. I am an integral part of the Product team,
        creating each feature from the beginning till the end and ensuring that
        although the product is complex, the style is unified and user-friendly.
      </p>
      <p>
        After the training on how to use the platform and long conversations
        with developers, consultants and support, I’ve decided to start working
        on a new Design System which would solve the majority of problems in the
        existing modules and also would set the path for the new one that I was
        expected to design.
      </p>

      <div
        className={styles['small-image']}
        style={{ backgroundImage: 'url(/assets/relay42/form-exploration.png)' }}
      />
      <h3>Design Solutions</h3>
      <p>
        After research of design systems and reviews of the existing ones such
        as Atlassian, Polaris and others I have audited the whole platform. I
        examined and color coded all components and noted down obvious logic and
        design errors. This helped me to know where I can find variations of
        each of them.
      </p>
      <p>
        I chose 4 the most complicated screens in our platform to redesign.
        These screens contained the most common items: forms, tables, most of
        the times both, had to include “create new” and edit functionalities. I
        have added visual cues and improved interactions that are understandable
        but also allows fast navigation for power users. Afterwards designed the
        rest of the components.
      </p>
      <p>
        In order to increase collaboaration with engineers and to be able to
        design new modules faster I have created a shared living Style Guide
        document in InVision and wrote guidelines how components should behave,
        added resources where possible.
      </p>
      <div
        className={styles['small-image']}
        style={{ backgroundImage: 'url(/assets/relay42/dropdown.png)' }}
      />
    </section>
  </div>
);
