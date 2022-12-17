import anecdotesService from "../services/anecdotes";

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

const anecdoteReducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "INIT_ANECDOTE":
      return action.data;
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "VOTE": {
      const id = action.data.id;
      const updatedAnecdote = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = {
        ...updatedAnecdote,
        votes: updatedAnecdote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    }
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();

    dispatch({
      type: "INIT_ANECDOTE",
      data: anecdotes,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);

    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });

    // data: {
    //   content,
    //   id: getId(),
    //   votes: 0,
    // },
  };
};

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.updateVote({
      ...anecdote,
      votes: anecdote.votes + 1,
    });

    dispatch({
      type: "VOTE",
      data: updatedAnecdote,
    });
  };
};


export default anecdoteReducer;

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];
// const initialState = anecdotesAtStart.map(asObject);
