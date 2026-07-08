/**
 * Секция «Get In Touch»: контактные данные (слева)
 * и форма обратной связи (справа).
 *
 * Форма не отправляет данные на сервер — по сабмиту открывается
 * почтовый клиент пользователя с уже заполненным письмом (mailto-ссылка).
 */
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACTS } from "../data/portfolio";
import { cx } from "../lib/utils";
import { ContactRow, Field, SectionHeading } from "./ui";

export function ContactSection() {
  // Состояние полей формы
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /** Возвращает обработчик изменения для конкретного поля формы. */
  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
    };

  /** Собирает mailto-ссылку из полей формы и открывает почтовый клиент. */
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = form.subject?.trim() || "Message from portfolio";
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");

    const mailto = `mailto:${encodeURIComponent(CONTACTS.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Слева: контактные данные */}
          <div>
            <div className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let&apos;s Connect
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              I&apos;m always interested in hearing about new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow icon={<Mail size={18} />} label="Email" value={CONTACTS.email} />
              <ContactRow icon={<Phone size={18} />} label="Phone" value={CONTACTS.phone} />
              <ContactRow icon={<Send size={18} />} label="Telegram" value={CONTACTS.telegram} />
              <ContactRow icon={<MapPin size={18} />} label="Location" value={CONTACTS.location} />
            </div>
          </div>

          {/* Справа: форма обратной связи */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Send Me a Message
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" value={form.name} onChange={onChange("name")} type="text" />
                <Field label="Email" value={form.email} onChange={onChange("email")} type="email" />
              </div>

              <Field label="Subject" value={form.subject} onChange={onChange("subject")} type="text" />

              {/* Многострочное поле сообщения */}
              <div>
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  rows={4}
                  className={cx(
                    "mt-2 w-full resize-none rounded-lg px-3 py-2 text-sm outline-none",
                    "border border-zinc-200 bg-zinc-100/60 text-zinc-900 placeholder:text-zinc-400",
                    "focus:ring-2 focus:ring-zinc-900/10",
                    "dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-50 dark:focus:ring-zinc-50/10"
                  )}
                />
              </div>

              <button
                type="submit"
                className={cx(
                  "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                  "bg-zinc-900 text-white shadow-sm transition-colors hover:bg-zinc-800",
                  "dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                )}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
