import { Form, Link, useActionData, useTransition } from "@remix-run/react";
import { ActionFunction } from "@remix-run/server-runtime/dist/router";
import { useEffect, useRef } from "react";

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");

  const API_KEY = process.env.CONVERTKIT_KEY;
  const FORM_ID = "4003002";
  const API = "https://api.convertkit.com/v3";

  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({ email, api_key: API_KEY }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return res.json();
};

export default function Programs() {
  let actionData = useActionData();
  let transition = useTransition();
  let state: "idle" | "success" | "error" | "submitting" =
    transition?.submission
      ? "submitting"
      : actionData?.subscription
      ? "success"
      : actionData?.error
      ? "error"
      : "idle";

  const inputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (state === "error") {
      inputRef.current?.focus();
    }

    if (state === "idle" && mounted.current) {
      inputRef.current?.select();
    }

    if (state === "success") {
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [state]);

  return (
    <div className="programs">
      <div className="mobile-container">
        <header>
          <section className="hero-banner">
            <div className="logo-wrapper">
              <img src="/Logo.png" alt="FollowTheLeaf logo." />
            </div>
            <div className="hero-image"></div>
          </section>
        </header>
        <main className="subscribeMain">
          <article className="text-info">
            <h2>We're</h2>
            <h2>
              Coming
              <br />
              Soon
            </h2>
            <p>
              Hello friends! We are currently working on our programs. Add your
              email address below to stay up-to-date with announcements and our
              launch events.
            </p>
            <section className="email-signup">
              <Form replace method="post" aria-hidden={state === "success"}>
                <fieldset disabled={state === "submitting"}>
                  <input
                    aria-label="email address"
                    aria-describedby="eror-message"
                    className="email-input"
                    type="email"
                    required
                    placeholder="Email Address"
                    name="email"
                    ref={inputRef}
                  />
                  <input
                    className="email-submit"
                    value={state === "submitting" ? "Subscribing..." : "GO"}
                    type="submit"
                  />
                </fieldset>
                <p id="error-message">
                  {state === "error" ? actionData.message : <>&nbsp;</>}
                </p>
              </Form>
              {state === "success" && (
                <div>
                  <h2 ref={successRef} tabIndex={-1}>
                    You're subscribed!
                  </h2>
                  <p>Please check your email to confirm your subscription.</p>
                  <Link to=".">Start over</Link>
                </div>
              )}
            </section>
          </article>
        </main>
      </div>
      <div className="hero-image-desktop">
        <img src="/programs.jpg" alt="sicilian pastore" />
      </div>
    </div>
  );
}
