/** A small, non-interactive ornament; all useful content stays outside it. */
export default function BotanicalAccent({ className = "" }: { className?: string }) {
  return (
    <svg className={`botanical-accent ${className}`} viewBox="0 0 180 260" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M93 254C72 215 75 182 98 148S124 86 107 12" />
        <path d="M84 222C47 222 29 202 28 175C59 174 83 190 84 222Z" />
        <path d="M85 222L44 190M82 193C105 193 132 173 139 149C110 148 88 164 82 193ZM82 193L122 165" />
        <path d="M96 151C67 154 40 136 35 108C64 107 88 124 96 151ZM96 151L52 122" />
        <path d="M112 118C137 106 152 84 148 57C121 64 108 85 112 118ZM112 118L140 77" />
        <path d="M115 84C86 82 67 60 70 33C96 39 112 58 115 84ZM115 84L80 48" />
        <path d="M109 30C121 21 129 10 124 1C111 6 106 16 109 30Z" />
      </g>
    </svg>
  );
}
