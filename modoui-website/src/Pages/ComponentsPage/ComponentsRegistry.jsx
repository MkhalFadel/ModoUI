import * as buttons from '../../../../modoui-core/src/libraryComponents/Buttons/Buttons.jsx'
import * as alerts from '../../../../modoui-core/src/libraryComponents/Alerts/Alerts.jsx'
import * as inputs from '../../../../modoui-core/src/libraryComponents/Inputs/Inputs.jsx'
import * as loaders from '../../../../modoui-core/src/libraryComponents/Loaders/Loaders.jsx'
import * as sliders from '../../../../modoui-core/src/libraryComponents/Sliders/Sliders.jsx'

export const componentsList = [
   {
      name: "PrimaryButton",
      component: <buttons.PrimaryButton text={"Click Me"} />,
      display: `<PrimaryButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "OutlineButton",
      component: <buttons.OutlineButton text={"Click Me"} />,
      display: `<OutlineButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "GradientButton",
      component: <buttons.GradientButton text={"Click Me"} />,
      display: `<GradientButton props={props} text={text} />`,
      type: "button"
   },

   {
      name: "GlassButton",
      component: <buttons.GlassButton text={"Click Me"} />,
      display: `<GlassButton props={props} text={text} />`,
      type: "button"
   },
   
   {
      name: "ShadowButton",
      component: <buttons.ShadowButton text={"Click Me"} />,
      display: `<ShadowButton props={props} text={text} />`,
      type: "button"
   },
   
   {
      name: "PillButton",
      component: <buttons.PillButton text={"Click Me"} />,
      display: `<PillButton props={props} text={text} />`,
      type: "button"
   },
   
   {
      name: "NeonButton",
      component: <buttons.NeonButton text={"Click Me"} />,
      display: `<NeonButton props={props} text={text} />`,
      type: "button"
   },
   
   {
      name: "SoftButton",
      component: <buttons.SoftButton text={"Click Me"} />,
      display: `<SoftButton props={props} text={text} />`,
      type: "button"
   },
   
   {
      name: "IconButton",
      component: <buttons.IconButton />,
      display: `<IconButton props={props} text={icon} />`,
      type: "button"
   },

   {
      name: "PrimaryAlert",
      component: <alerts.PrimaryAlert />,
      display: `<PrimaryAlert props={props} />`,
      type: "alert"
   },

   {
      name: "SuccessAlert",
      component: <alerts.SuccessAlert />,
      display: `<SuccessAlert props={props} />`,
      type: "alert"
   },

   {
      name: "WarningAlert",
      component: <alerts.WarningAlert />,
      display: `<WarningAlert props={props} />`,
      type: "alert"
   },

   {
      name: "ErrorAlert",
      component: <alerts.ErrorAlert />,
      display: `<ErrorAlert props={props} />`,
      type: "alert"
   },

   {
      name: "InfoAlert",
      component: <alerts.InfoAlert />,
      display: `<InfoAlert props={props} />`,
      type: "alert"
   },
   
   {
      name: "SecondaryAlert",
      component: <alerts.SecondaryAlert />,
      display: `<SecondaryAlert props={props} />`,
      type: "alert"
   },
   
   {
      name: "DarkAlert",
      component: <alerts.DarkAlert />,
      display: `<DarkAlert props={props} />`,
      type: "alert"
   },
   
   {
      name: "GradientAlert",
      component: <alerts.GradientAlert />,
      display: `<GradientAlert props={props} />`,
      type: "alert"
   },
   
   {
      name: "MinimalAlert",
      component: <alerts.MinimalAlert />,
      display: `<MinimalAlert props={props} />`,
      type: "alert"
   },
   
   {
      name: "GlassAlert",
      component: <alerts.GlassAlert />,
      display: `<GlassAlert props={props} />`,
      type: "alert"
   },

   {
      name: "PrimaryInput",
      component: <inputs.PrimaryInput props={{width: "80%"}} />,
      display: `<PrimaryInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "OutlineInput",
      component: <inputs.OutlineInput props={{width: "80%"}} />,
      display: `<OutlineInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "FilledInput",
      component: <inputs.FilledInput props={{width: "80%"}} />,
      display: `<FilledInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "UnderlineInput",
      component: <inputs.UnderlineInput props={{width: "80%"}} />,
      display: `<UnderlineInput props={props} placeholder={placeholder} />`,
      type: "input"
   },
   
   {
      name: "GlowInput",
      component: <inputs.GlowInput props={{width: "80%"}} />,
      display: `<GlowInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "RoundedInput",
      component: <inputs.RoundedInput props={{width: "80%"}} />,
      display: `<RoundedInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "GlassInput",
      component: <inputs.GlassInput props={{width: "80%"}} />,
      display: `<GlassInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "ShadowInput",
      component: <inputs.ShadowInput props={{width: "80%"}} />,
      display: `<ShadowInput props={props} placeholder={placeholder} />`,
      type: "input"
   },
   
   {
      name: "TerminalInput",
      component: <inputs.TerminalInput props={{width: "80%"}} />,
      display: `<TerminalInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "NeonPulseInput",
      component: <inputs.NeonPulseInput props={{width: "80%"}} />,
      display: `<NeonPulseInput props={props} placeholder={placeholder} />`,
      type: "input"
   },

   {
      name: "CircleLoader",
      component: <loaders.CircleLoader />,
      display: `<CircleLoader props={props} />`,
      type: "loader"
   },

   {
      name: "DottedLoader",
      component: <loaders.DottedLoader />,
      display: `<DottedLoader props={props} />`,
      type: "loader"
   },

   {
      name: "DualRingLoader",
      component: <loaders.DualRingLoader />,
      display: `<DualRingLoader props={props} />`,
      type: "loader"
   },

   {
      name: "DotPulseLoader",
      component: <loaders.DotPulseLoader />,
      display: `<DotPulseLoader props={props} />`,
      type: "loader"
   },

   {
      name: "BarLoader",
      component: <loaders.BarLoader />,
      display: `<BarLoader props={props} />`,
      type: "loader"
   },

   {
      name: "BounceLoader",
      component: <loaders.BounceLoader />,
      display: `<BounceLoader props={props} />`,
      type: "loader"
   },

   {
      name: "SquareSpinLoader",
      component: <loaders.SquareSpinLoader />,
      display: `<SquareSpinLoader props={props} />`,
      type: "loader"
   },
   
   {
      name: "WaveBarsLoader",
      component: <loaders.WaveBarsLoader />,
      display: `<WaveBarsLoader props={props} />`,
      type: "loader"
   },
   
   {
      name: "TypingDotsLoader",
      component: <loaders.TypingDotsLoader />,
      display: `<TypingDotsLoader props={props} />`,
      type: "loader"
   },
   
   {
      name: "FlipCardLoader",
      component: <loaders.FlipCardLoader />,
      display: `<FlipCardLoader props={props} />`,
      type: "loader"
   },
   
   {
      name: "RippleLoader",
      component: <loaders.RippleLoader />,
      display: `<RippleLoader props={props} />`,
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
      name: "ShinySlider",
      component: <sliders.ShinySlider props={{width: "80%"}} />,
      display: `<ShinySlider props={props} />`,
      type: "slider"
   },
   
   {
      name: "MetalSlider",
      component: <sliders.MetalSlider props={{width: "80%"}} />,
      display: `<MetalSlider props={props} />`,
      type: "slider"
   },
   
   {
      name: "ChunkySlider",
      component: <sliders.ChunkySlider props={{width: "80%"}} />,
      display: `<ChunkySlider props={props} />`,
      type: "slider"
   },
   
   {
      name: "GlowNeonSlider",
      component: <sliders.GlowNeonSlider props={{width: "80%"}} />,
      display: `<GlowNeonSlider props={props} />`,
      type: "slider"
   },
   
   {
      name: "RainbowSlider",
      component: <sliders.RainbowSlider props={{width: "80%"}} />,
      display: `<RainbowSlider props={props} />`,
      type: "slider"
   },
]

for(let i = componentsList.length - 1; i > 0; i-- )
{
   const j = Math.floor(Math.random() * (i + 1));
   [componentsList[i], componentsList[j]] = [componentsList[j], componentsList[i]];
}