import Tooltip from '../modules/tooltips/Tooltip'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'

const Explainer = (
  <span className="w-56">Hover over to see content. This content is a DOM element</span>
)

const ExplainerComplex = (
  <div className="w-56 flex flex-col justify-center space-y-2">
    <span>Hover over to see content. This content is a DOM element</span>
    <input className="rounded p-2 text-black" placeholder="Type something.." />
  </div>
)

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 mt-10">
      <div className="w-56">
        <h1 className="text-2xl font-bold mb-2">Example 1</h1>
        <span className="mr-2">How does this thing work?</span>
        <Tooltip tooltipContent={Explainer}>
          <QuestionMarkCircleIcon className="w-5 inline" />
        </Tooltip>
      </div>

      <div className="w-56">
        <h1 className="text-2xl font-bold mb-2">Example 2</h1>
        <span>
          How does this
          <Tooltip tooltipContent="The content can just be text too"><b> thing </b></Tooltip>
          work?
        </span>
      </div>

      <div className="w-56">
        <h1 className="text-2xl font-bold mb-2">Example 3</h1>
        <div>
          <Tooltip tooltipContent={ExplainerComplex}>
            <div className="inline-block w-24 h-24 bg-red-500">Some random DOM element</div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
