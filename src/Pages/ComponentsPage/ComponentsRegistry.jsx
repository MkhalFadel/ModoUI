import * as buttons from '../../Components/Buttons/Buttons.jsx'
import * as alerts from '../../Components/Alerts/Alerts.jsx'
import * as inputs from '../../Components/Inputs/Inputs.jsx'
import * as loaders from '../../Components/Loaders/Loaders.jsx'
import * as sliders from '../../Components/Sliders/Sliders.jsx'
import * as toggles from '../../Components/Toggles/Toggles.jsx'

export const componentsList = [
   {
      name: "PrimaryButton",
      component: <buttons.PrimaryButton props={""} text={"Click Me"} />,
      display: `<PrimaryButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "OutlineButton",
      component: <buttons.OutlineButton props={""} text={"Click Me"} />,
      display: `<OutlineButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "GradientButton",
      component: <buttons.GradientButton props={""} text={"Click Me"} />,
      display: `<GradientButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "GlassButton",
      component: <buttons.GlassButton props={{backgroundColor: "black"}} text={"Click Me"} />,
      display: `<GlassButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "PrimaryAlert",
      component: <alerts.PrimaryAlert props={""} />,
      display: `<PrimaryAlert props={props} />`,
      type: "alert"
   },

   {
      name: "SuccessAlert",
      component: <alerts.SuccessAlert props={""} />,
      display: `<SuccessAlert props={props} />`,
      type: "alert"
   },

   {
      name: "WarningAlert",
      component: <alerts.WarningAlert props={""} />,
      display: `<WarningAlert props={props} />`,
      type: "alert"
   },

   {
      name: "ErrorAlert",
      component: <alerts.ErrorAlert props={""} />,
      display: `<ErrorAlert props={props} />`,
      type: "alert"
   },

   {
      name: "InfoAlert",
      component: <alerts.InfoAlert props={""} />,
      display: `<InfoAlert props={props} />`,
      type: "alert"
   },

   {
      name: "PrimaryInput",
      component: <inputs.PrimaryInput props={{width: "80%"}} />,
      display: `<PrimaryInput props={props} />`,
      type: "input"
   },

   {
      name: "OutlineInput",
      component: <inputs.OutlineInput props={{width: "80%"}} />,
      display: `<OutlineInput props={props} />`,
      type: "input"
   },

   {
      name: "FilledInput",
      component: <inputs.FilledInput props={{width: "80%"}} />,
      display: `<FilledInput props={props} />`,
      type: "input"

   },

   {
      name: "UnderlineInput",
      component: <inputs.UnderlineInput props={{width: "80%"}} />,
      display: `<UnderlineInput props={props} />`,
      type: "input"
   },
   
   {
      name: "GlowInput",
      component: <inputs.GlowInput props={{width: "80%"}} />,
      display: `<GlowInput props={props} />`,
      type: "input"
   },

   {
      name: "CircleLoader",
      component: <loaders.CircleLoader props={""} />,
      display: `<CircleLoader props={props} />`,
      type: "loader"
   },

   {
      name: "DualRingLoader",
      component: <loaders.DualRingLoader props={""} />,
      display: `<DualRingLoader props={props} />`,
      type: "loader"
   },

   {
      name: "DotPulseLoader",
      component: <loaders.DotPulseLoader props={""} />,
      display: `<DotPulseLoader props={props} />`,
      type: "loader"
   },

   {
      name: "BarLoader",
      component: <loaders.BarLoader props={""} />,
      display: `<BarLoader props={props} />`,
      type: "loader"
   },

   {
      name: "BounceLoader",
      component: <loaders.BounceLoader props={""} />,
      display: `<BounceLoader props={props} />`,
      type: "loader"
   },

   {
      name: "PrimarySlider",
      component: <sliders.PrimarySlider props={{width: "80%"}} />,
      display: `<PrimarySlider props={props} />`,
      type: "slider"
   },

   {
      name: "SecondarySlider",
      component: <sliders.SecondarySlider props={{width: "80%"}} />,
      display: `<SecondarySlider props={props} />`,
      type: "slider"
   },

   {
      name: "GradientSlider",
      component: <sliders.GradientSlider props={{width: "80%"}} />,
      display: `<GradientSlider props={props} />`,
      type: "slider"
   },

   {
      name: "NeonSlider",
      component: <sliders.NeonSlider props={{width: "80%"}} />,
      display: `<NeonSlider props={props} />`,
      type: "slider"
   },

   {
      name: "GlassSlider",
      component: <sliders.GlassSlider props={{width: "80%"}} />,
      display: `<GlassSlider props={props} />`,
      type: "slider"
   },

   {
      name: "PrimaryToggle",
      component: <toggles.PrimaryToggle props={""} />,
      display: `<PrimaryToggle props={props} text={text} />`,
      type: "toggle"
   },

   {
      name: "PrimaryCheckbox",
      component: <toggles.PrimaryCheckbox props={""} />,
      display: `<PrimaryCheckbox props={props} text={text} />`,
      type: "toggle"
   },

   {
      name: "PrimaryRadio",
      component: <toggles.PrimaryRadio props={""} />,
      display: `<PrimaryRadio props={props} text={text} />`,
      type: "toggle"
   },
]

