const Todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    //params1: 모델(테이블) 이름 설정
    "todo",
    //params2: 컬럼 정의
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
    },

    // params3: 모델 옵션 정의
    {
      tableName: "todo", //실제 mysql 테이블 명
      freezeTableName: true, //테이블 명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
  );
  return model;
};

//2. 내보내기 (indexs에서 사용됨  require("./Visitor")(sequelize, Sequelize))
module.exports = Todo;
