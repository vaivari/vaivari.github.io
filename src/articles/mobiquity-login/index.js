import React from 'react';
import { Helmet } from 'react-helmet';

import Image from 'src/components/image';
import styles from '../styles.module.scss';

export default () => (
  <div className={styles.root}>
    <Helmet>
      <title>Emoji Story</title>
    </Helmet>
    <header>
      <h4>Vaiva Rivas</h4>
      <h2>Emoji story - original and secure login flow</h2>
    </header>
    <section>
      <Image
        img="/assets/emoji-story/email_emoji story@2x.jpg"
        alt="Design images"
      />
      <h3>Context and my role</h3>
      <p>
        I was interviewing with the company for a UX Designer’s role. One of the
        parts of the interviewing process was the design assignment. I had a
        couple of days to complete the task at home and then I presented it to
        two senior designers.{' '}
      </p>
      <h3>The Goal</h3>
      <p>
        The task was to{' '}
        <b>
          design an original and secure login flow for a mobile banking app.
        </b>
      </p>
      <Image
        img="/assets/emoji-story/emoji messages@2x.jpg"
        alt="Design images"
        small="Inspiration and examples how sometimes people communicate in emojis"
      />
      <h3>Research</h3>
      <p>I have identified seven login flows that are currently existing:</p>
      <ul>
        <li>Username and password</li>
        <li>Username, password and character picking of a passphrase</li>
        <li>Username, password and faceID or touchID</li>
        <li>Username, passwordand PIN</li>
        <li>Two-factor authentication (2FA)</li>
        <li>Magic link</li>
        <li>Login using social media account</li>
      </ul>
      <Image
        img="/assets/emoji-story/secure authentication@2x.jpg"
        alt="Design images"
        small="Secure login flow should include 2 out of 3 instances"
      />

      <p>
        Some ways to login are more secure than others. However most of the
        times it takes twice longer to login when using the more secure option.
        Also it is much harder to set them up for the first time and more
        troubles in case a user is locked out. The most common problem with
        passwords is that people use the same password for many different
        accounts and these passwords are not very complicated.
      </p>

      <Image
        img="/assets/emoji-story/users@2x.jpg"
        alt="Design images"
        small="Early adopters - young professionals"
      />
      <h3>Users</h3>
      <p>
        If a bank is looking for an original method to login into an app, this
        means that the bank wants to appear young, innovative, progressive,
        ahead of competitors and more appealing to the younger generation. The
        client wants to surprise its users and get them talking about it with
        their friends and family.
      </p>
      <p>
        I decided that the target user or “early adopters” should be people
        between 25-40 years old who are looking for a bank that is not
        old-fashioned but rather a secure and privacy-respecting* institution
        that really serves their current needs. Where processes are fast,
        efficient, many actions can be done online and most of them are
        automated.
      </p>
      <i>
        * privacy-respecting means not only that users’ data is managed in a
        secure way, but also that “biometrical” data is not collected.
      </i>

      <Image
        img="/assets/emoji-story/emoji art@2x.jpg"
        alt="Design images"
        small="Inspiration and examples how emojis can become art or convey a meaning"
      />
      <h3>Design Challenge</h3>
      <p>
        Having in mind the research and user description, I have identified the
        main objectives for the design of login experience. It has to be:
      </p>
      <ul>
        <li>Secure</li>
        <li>Original</li>
        <li>Easy to setup</li>
        <li>Fast login - one level</li>
        <li>Fun</li>
      </ul>

      <h3>
        Proposed Solution:{' '}
        <span style={{ color: '#f14773' }}>Username + Emoji Story</span>
      </h3>
      <p>
        On the login screen users have to select a sequence of emojis. That is
        in case they have agreed upfront that a username can be pre-populated.
      </p>
      <p>
        A sequence of emojis represents a story from user’s life that is told
        using emojis. There would be 9 emojis on the login screen. If a user set
        up a story that is told using 4 emojis, on the login screen there would
        be 4 emojis from the story and 5 random emojis.
      </p>
      <Image
        img="/assets/emoji-story/sketches@2x.jpg"
        alt="Design images"
        small="Exploring magic link and sequences of emojis instead of a PIN as possible solutions"
      />

      <h3>Login setup process</h3>
      <p>To set up a login for a mobile app, users need to:</p>
      <ul>
        <li>
          <b>Type email address</b>
        </li>
        <li>
          <p>
            <b>Choose a phrase or a question</b> that they will be using for
            their emoji passcode. This would be called “my story hint”. From the
            dropdown menu users can choose one of the suggested
            questions/phrases or create their own.
          </p>
          <p>
            Important to highlight that when creating an emoji passcode users
            need to have in mind the <b>historical order</b> or “top x” order
            (e.g. top 4 things that I love the most in my life).
          </p>
          <div>Examples of suggested questions/phrases:</div>
          <div>What happened on the day when I met my partner?</div>
          <div>What happened on the happiest day of my life?</div>
          <div>What happened during my bachelor(ette) party?</div>
          <div>How does my day look like?</div>
          <div>
            The most memorable moments of my life in a historical order.
          </div>
          <div>Happiest moments of my life in a historical order.</div>
          <div>What are the top 4 things that I’m the most grateful for?</div>
        </li>
        <li>
          <b>Choose 4 to 9 emojis</b> to tell a story of a chosen life event, a
          question or a phrase. Users can select any possible emoji from the
          list.
        </li>
        <li>
          <b>Repeat the sequence of emojis</b>
        </li>
        <li>The user can choose to create a secondary (backup) emoji story</li>
        <li>
          <b>Click “submit”</b>
        </li>
      </ul>

      <Image
        img="/assets/emoji-story/1st part@2x.jpg"
        alt="Design images"
        small="A user needs email address which can be remembered next time"
      />

      <h3>Login process</h3>
      <p>
        A user needs to select correct emojis in the correct order. There would
        be 9 emojis on the screen. If a user set up a story that is told using 4
        emojis, then a user needs to find those 4 emojis and select them in the
        correct order.
      </p>
      <p>
        For security reasons the 4 correct emojis would be shown in a different
        place each time.
      </p>
      <p>
        If a user is not sure of the sequence of emojis or they don’t remember
        the story, they can click on “my story hint”. A user will see a question
        or a phrase that they chose when creating an account. Hopefully, the
        hint will remind a user of their story and the historical order.
      </p>

      <Image
        img="/assets/emoji-story/2nd part@2x.jpg"
        alt="Design images"
        small="A user logs in by selecting emojis which represent the story of the happiest day of their life"
      />

      <p>Pros</p>
      <ul>
        <li>
          <b>Easy to set up</b>
        </li>
        <li>
          <b>Fun</b> and fast way to login
        </li>
        <li>
          <b>Secure</b>. This passcode is not used in other platforms, it's a
          unique code that is meaningful only to the creator. Even if someone
          knows the "my story hint" question and knows user's resume or basic
          facts of their life, they still cannot guess what are the most
          meaningful events of their life to them and which emojis they chose to
          represent that.
        </li>
        <li>
          <b>Easy to remember</b>. It has been proven that things that are
          related to some kind of narrative are easier to remember, especially
          if they are expressed in a visual way.
        </li>
      </ul>
      <p>Cons</p>
      <ul>
        <li>
          <b>
            Harder to adopt for less flexible, non-tech savy or senior users
          </b>, because they are less familiar with emojis. Also it’s not a
          usual way to login. However I truly believe that as soon as senior or
          non-tech savy people would understand what emojis mean, it would be
          actually easier for them to remember and use the emoji story than any
          of the conventional methods. Login Setup Process must be very well
          thought about.
        </li>
        <li>
          <b>Might remember the right emojis but forget the correct sequence</b>.
          Users might create not a story-line but an event or a dream of a
          future that doesn’t have a storyline over time (e.g. what I am saving
          money for?; What is my dream vacation?). Again, with the very good
          Login Setup Process this problem can be solved by making it clear that
          it is better to think of a story that has a historical order.
        </li>
      </ul>

      <Image
        img="/assets/emoji-story/emoji art 2@2x.jpg"
        alt="Design images"
        small="Emojis are part of our lives so why not to use them for passwords?"
      />

      <h3>Conclusion</h3>
      <p>
        Emoji story login is much better than other methods because it has all
        the right benefits: fast, easy to remember, secure. Whereas cons can be
        solved by having a great onboarding.
      </p>
      <p>
        In general, people would be much happier to use this kind of login as it
        is proven that human beings relate to stories much more than to PINs or
        passwords.
      </p>
    </section>
  </div>
);
