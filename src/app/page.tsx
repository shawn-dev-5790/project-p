import Link from 'next/link'
import ui from './page.module.css'

export default function Home() {
  return (
    <div className={ui.wrap}>
      <h2>Home. Overview-Patterns</h2>
      <p>
        Project-Pattern is a project to familiarize yourself with by trying out
        patterns based on scenarios.
      </p>
      <section className={ui.head}>
        <div className={ui.overview}>
          <strong>Purpose</strong>
          <p>
            The purpose of this project is to provide developers with an
            opportunity to explore different design patterns by implementing
            them in various scenarios. By doing so, developers can gain a better
            understanding of when and how to use each pattern, as well as the
            benefits and drawbacks of each approach.
          </p>
          <strong>How to Use</strong>
          <p>
            To get started, simply clone the repository and choose a scenario to
            work on. Each scenario includes a brief description, along with any
            relevant requirements or constraints. You can then implement the
            scenario using any design patterns that you think are appropriate.
          </p>
          <strong>Scenarios</strong>
          <p>
            The following scenarios are included in this project: check out next
            section.
          </p>
          <strong>Contributing</strong>
          <p>
            Contributions are welcome! If you have a scenario and/or design
            pattern that you would like to add, please open a pull request with
            your changes.
          </p>
          <strong>License</strong>
          <p>
            This project is licensed under the MIT License. See the LICENSE file
            for details.
          </p>
        </div>
        <div className={ui.iframe_wrap}>
          <iframe
            title='examples of javascript patterns'
            seamless={true}
            src='https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern#overview'
          />
        </div>
      </section>
      <section className={ui.cont}>
        <strong>Scenarios</strong>
        <ul>
          <li>
            <Link href={'/patterns/factory'}>
              <b>Factory Pattern</b>
              <p>
                The objective of this system is to produce toys of different
                types and allow controlling their movements, locations, prices,
                and actions through various patterns.
              </p>
              <p>
                1. The toy production space is a 64*64 space. <br />
                2. Each toy should have a unique (x,y) coordinate on this space.
                <br />
                3. A-type and B-type toys should be produced in equal
                quantities. Up to 40 toys can be produced.
              </p>
              <p>
                Each toy should have the following attributes:
                <br />
                1. Name: A name can be assigned to a toy when it is initially
                created. <br />
                2. Price: The initial price of each toy should be randomly
                generated in multiples of 1000. <br />
                3. Coordinate: Each toy should know its own (x,y) coordinate and
                be able to display it. <br />
                4. Arm: If a toy has an arm, it should be able to wave its hand.{' '}
                <br />
                5. Movement: Each toy should be able to move in any direction by
                1 unit per 0.1 seconds. <br />
                6. Price adjustment: Each toy should be able to adjust its own
                price.
              </p>
              <p>Each toy type has its own attributes:</p>
              <p>
                A-type:
                <br />
                1. The initial coordinate of the first A-type toy is (1,0), and
                the X-coordinate of each subsequent A-type toy increases by 1.
                <br />
                2. It has an arm, allowing it to wave its hand.
              </p>
              <p>
                B-type: <br />
                1. The initial coordinate of the first B-type toy is (0,1), and
                the Y-coordinate of each subsequent B-type toy increases by 1.
                <br />
                2. It does not have an arm.
                <br />
              </p>
            </Link>
          </li>
          <li>
            <Link href={'/patterns/mediator'}>
              <b>Mediator Pattern</b>
              <p>
                The system should allow controlling the toys using three
                commands
              </p>
              <p>
                1. Wave: This command should be used to make toys with arms wave
                their hands.
                <br />
                2. X-axis sort: This command should be used to sort the toys in
                an A-B-A-B pattern on the nth X-axis.
                <br />
                3. Y-axis sort: This command should be used to sort the toys in
                an A-B-A-B pattern on the nth Y-axis.
              </p>
            </Link>
          </li>
          <li>
            <Link href={'/patterns/observer'}>
              <b>Observer pattern</b>
              <p>
                Each toy should be able to subscribe to a store manager to
                receive notifications about specific events.
                <br />
                The store manager should be able to broadcast the following
                notifications
              </p>
              <p>
                1. Discount event: When a discount event is triggered by the
                store manager, all toys with a price greater than or equal to
                1000
              </p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
