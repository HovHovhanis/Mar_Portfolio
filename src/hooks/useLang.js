import { useUnit } from 'effector-react'
import { $currentLang, setLang } from '../context/lang'
import translationJson from "../../public/translation/translation.json";

export const useLang = () => {
  const lang = useUnit($currentLang)
  const translation = translationJson
  
  return { lang, translation, setLang}
}

