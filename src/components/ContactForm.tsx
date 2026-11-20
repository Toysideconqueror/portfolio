"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/content";
import { WEB3FORMS_ACCESS_KEY } from "@/data/config";
import { useLang } from "@/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "glass w-full rounded-2xl px-4 py-3 text-sm placeholder:text-muted/70 outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--fg)]";

export default function ContactForm() {
  const { ui } = useLang();
  const c = ui.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Chưa có key: mở ứng dụng mail của người xem với nội dung đã điền sẵn.
    if (!WEB3FORMS_ACCESS_KEY) {
      const body = `${message}\n\n— ${name || email} (${email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      // Web3Forms nhận JSON rồi gửi thành email tới hộp thư đã đăng ký với access key.
      // Trường `email` được Web3Forms dùng làm Reply-To, nên bấm "Trả lời" trong Gmail là trả lời thẳng người gửi.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${c.subject}${name ? ` · ${name}` : ""}`,
          from_name: "Portfolio",
          name: name || email,
          email,
          message,
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <h4 className="font-mono text-sm text-muted">{c.formTitle}</h4>

      {/* Bẫy bot: ô ẩn, người thật không thấy nên để trống; bot tự điền vào thì Web3Forms bỏ qua. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">{c.name}</span>
          <input name="name" type="text" maxLength={100} autoComplete="name" placeholder={c.namePlaceholder} className={field} />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">
            {c.email} <span className="text-muted">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder={c.emailPlaceholder}
            className={field}
          />
        </label>
      </div>
      <p className="-mt-2 text-xs text-muted">{c.emailHint}</p>

      <label className="block space-y-1.5">
        <span className="text-sm font-medium">
          {c.message} <span className="text-muted">*</span>
        </span>
        <textarea name="message" required rows={5} maxLength={5000} placeholder={c.messagePlaceholder} className={`${field} resize-y`} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer rounded-full bg-fg px-7 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? c.sending : c.send}
        </button>
        <p aria-live="polite" className={`text-sm ${status === "error" ? "text-red-500" : "text-muted"}`}>
          {status === "success" ? c.success : status === "error" ? c.error : ""}
        </p>
      </div>
    </form>
  );
}
