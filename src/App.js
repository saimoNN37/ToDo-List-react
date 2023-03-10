import { Switch, Route, HashRouter, Redirect, } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledUl, StyledNavLink, StyledLi } from "./styled";

const App = () => (
    <HashRouter>
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/author">O Autorze</StyledNavLink>
                </StyledLi>
            </StyledUl>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
export default App;
