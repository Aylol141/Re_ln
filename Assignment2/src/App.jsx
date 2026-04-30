
const Header = (props) => {
  return <h1>{props.course}</h1>;
};


const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};


const Total = (props) => {
  return <p>مجموع التمارين: {props.sum}</p>;
};


const StudentCard = (props) => {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#fafafa'
  };
  return (
    <div style={cardStyle}>
      <h3>Student card</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Specialization: {props.major}</p>
    </div>
  );
};

const App = () => {
 
  const course = 'تطوير تطبيقات Half Stack';
  const part1 = 'أساسيات React';
  const exercises1 = 10;
  const part2 = 'استخدام props لتمرير البيانات';
  const exercises2 = 7;
  const part3 = 'حالة المكون';
  const exercises3 = 14;

  return (
    <div style={{ padding: '20px' }}>
      {/* تنفيذ التمرين 4 */}
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />

      <hr />

      {/* تنفيذ التمرين الإضافي */}
      <h2>قسم بطاقات الطلاب</h2>
      <StudentCard name="Aylol" age="23" major="Software Engineering" />
      <StudentCard name="Karees" age="22" major="networks" />
      <StudentCard name="Laren" age="24" major="Artificial intelligence " />
    </div>
  );
};

export default App;