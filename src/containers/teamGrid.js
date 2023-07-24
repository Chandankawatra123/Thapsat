/* eslint-disable react/jsx-key */
import TeamMember from '../components/teamMember/teamMember.js'

function TeamGrid(props) {
  var teamMembers= [
    <TeamMember memberName='Vansh Gehlot' memberTitle='CEO and Founder' />,
    <TeamMember memberName='Kamil Pawlak' memberTitle='Web Developer' />,
    <TeamMember memberName='Alfiya Hussain' memberTitle='Operations' />,
    <TeamMember memberName='David Tran' memberTitle='Web Developer' />,
    <TeamMember memberName='Joshua Zou' memberTitle='Web Developer' />,
    <TeamMember memberName='Sathihi Lingampalli' memberTitle='Designer' />,
    <TeamMember memberName='Nitya Swami' memberTitle='Content Creator' />,
    <TeamMember memberName='Shreya' memberTitle='Designer' />,
    <TeamMember memberName='Eddy Zhu' memberTitle='Web Developer' />,
    <TeamMember memberName='First Last' memberTitle='Web Developer' />,
    <TeamMember memberName='First Last' memberTitle='Web Developer' />,
    <TeamMember memberName='First Last' memberTitle='Web Developer' />
  ];

  var gridElements = [];
  teamMembers.forEach(teamMember => {
    gridElements.push(<div className="block">{teamMember}</div>);
  })

  return(
    <div className="team-grid">
      {gridElements}  
    </div>    
  )
}

export default TeamGrid;