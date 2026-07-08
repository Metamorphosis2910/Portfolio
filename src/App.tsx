/**
 * Корневой компонент приложения.
 * Сайт одностраничный, поэтому просто рендерит лендинг портфолио.
 */
import { PortfolioLanding } from "./pages/PortfolioLanding";

export default function App() {
  return <PortfolioLanding />;
}
