import React from 'react'

const Anecdotes = ({ anecdotes, selected, setSelected, votes, setVotes }) => {
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h2> quotes </h2>
      <div style={{ minHeight: '100px', fontSize: '1.2em' }}>
        <p dangerouslySetInnerHTML={{ __html: anecdotes[selected] }} />
      </div>
      <p>الأصوات الحالية: <strong>{votes[selected]}</strong></p>
      <button onClick={handleVote}>تصويت</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>الحكاية التالية</button>
      
      <hr />
      <h3> الأكثر شعبية</h3>
      {maxVotes > 0 ? (
        <p dangerouslySetInnerHTML={{ __html: anecdotes[mostVotedIndex] }} />
      ) : <p>لا يوجد تصويت بعد</p>}
    </div>
  )
}
export default Anecdotes