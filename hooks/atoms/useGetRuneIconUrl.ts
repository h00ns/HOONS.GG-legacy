import { useMemo } from "react"

// primary 룬, sub 룬 icon url return
export const useGetRuneIconUrl = (runeId: number) => {
  const runeIconUrl = useMemo(() => {
    switch (runeId) {
      case 8100:
        return '7200_Domination.png';
      case 8112:
        return 'Domination/Electrocute/Electrocute.png';
      case 8124:
        return 'Domination/Predator/Predator.png';
      case 8128:
        return 'Domination/DarkHarvest/DarkHarvest.png';
      case 9923:
        return 'Domination/HailOfBlades/HailOfBlades.png';
      case 8300:
        return '7203_Whimsy.png';
      case 8351:
        return 'Inspiration/GlacialAugment/GlacialAugment.png';
      case 8360:
        return 'Inspiration/UnsealedSpellbook/UnsealedSpellbook.png';
      case 8369:
        return 'Inspiration/FirstStrike/FirstStrike.png';
      case 8000:
        return '7201_Precision.png';
      case 8005:
        return 'Precision/PressTheAttack/PressTheAttack.png';
      case 8008:
        return 'Precision/LethalTempo/LethalTempoTemp.png';
      case 8021:
        return 'Precision/FleetFootwork/FleetFootwork.png';
      case 8010: 
        return 'Precision/Conqueror/Conqueror.png';
      case 8400:
        return '7204_Resolve.png';
      case 8437:
        return 'Resolve/GraspOfTheUndying/GraspOfTheUndying.png';
      case 8439:
        return 'Resolve/VeteranAftershock/VeteranAftershock.png';
      case 8465: 
        return 'Resolve/Guardian/Guardian.png';
      case 8200:
        return '7202_Sorcery.png';
      case 8214:
        return 'Sorcery/SummonAery/SummonAery.png';
      case 8229:
        return 'Sorcery/ArcaneComet/ArcaneComet.png';
      case 8230:
        return 'Sorcery/PhaseRush/PhaseRush.png';
    }
  }, [runeId])

  return runeIconUrl
}