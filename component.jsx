
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Luxury Watch Raffle</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Win a Limited Edition Rolex Submariner
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Enter for a chance to win this stunning Rolex Submariner, valued at $12,000. Only 1,000 tickets available.
            </p>
            <div className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Connect Wallet
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="500"
            height="500"
            alt="Rolex Submariner"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Purchase Raffle Tickets</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              Tickets are $20 each. You can purchase as many as you'd like using your connected Web3 wallet.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <Input
                type="number"
                min="1"
                max="50"
                defaultValue="1"
                className="max-w-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              />
              <div className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Purchase Tickets
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Raffle Details</h2>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tickets Sold:</span>
                <span>500 / 1,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Ticket Price:</span>
                <span>$20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estimated Jackpot:</span>
                <span>$20,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Raffle End Date:</span>
                <span>2023-12-31</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Raffle Rules</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                <p>Only 1,000 tickets will be sold for this raffle.</p>
              </div>
              <div className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                <p>Tickets are $20 each and can be purchased using a connected Web3 wallet.</p>
              </div>
              <div className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                <p>The winner will be randomly selected and announced on [DATE].</p>
              </div>
              <div className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-4 w-4 shrink-0 text-primary" />
                <p>The winner will be contacted directly and the Rolex Submariner will be shipped to them.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Time Remaining</h2>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">12</span>
                <span className="text-sm text-muted-foreground">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">06</span>
                <span className="text-sm text-muted-foreground">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">45</span>
                <span className="text-sm text-muted-foreground">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">22</span>
                <span className="text-sm text-muted-foreground">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
