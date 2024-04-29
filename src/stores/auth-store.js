import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const authStore = defineStore("auth", {
  state: () => ({
    userInfo: { role: null, id: null, name: null, email: null },
    menu: [],
    rows: [],
  }),
  getters: {
    user: (state) => state.userInfo,
    getMenu: (state) => state.menu,
    getRows: (state) => state.rows,
  },
  actions: {
    async initiate() {
      const localUser = JSON.parse(localStorage.getItem("userInfo"));
      if (localUser) {
        this.userInfo = {
          role: localUser.role,
          id: localUser.id,
          name: localUser.name,
          email: localUser.email,
          studentInfoId: localUser.studentInfoId,
          studentId: localUser.studentId,
        };
        await this.setMenu();
      } else
        this.menu = [
          { name: "Login", url: "/login", icon: "login", nested: false },
        ];
    },
    async login(userId, password) {
      try {
        const res = await api.post(`/Auth/Login/${userId}/${password}`);

        const userInformation = await api.get(
          `/Students/GetStudentByUserId/${res.data.studentInfoId}`
        );

        this.userInfo = {
          id: res.data.id,
          studentInfoId: res.data.studentInfoId,
          studentId: userInformation.data.studentId,
          role: res.data.role,
          name: userInformation.data.name,
          email: userInformation.data.email,
        };

        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        await this.setMenu();
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      this.userInfo = {
        role: null,
        id: null,
        name: null,
        email: null,
        studentInfoId: null,
        studentId: null,
      };
      this.menu = [
        { name: "Login", url: "/login", icon: "login", nested: false },
      ];
    },
    async setMenu() {
      this.menu = [
        {
          name: "Request",
          url: "request",
          icon: "description",
          nested: true,
          pages: [
            { name: "New Request", url: "/requests/new", icon: "add" },
            { name: "All Requests", url: "/requests/all", icon: "done_all" },
          ],
        },
      ];
    },
    async setRows() {
      this.rows = {
        viewAs: "AO",
        editable: true,
        data: [
          {
            id: 1,
            serial: "1",
            studentId: "21303010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Pending",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "Checking",
            attachmentUrl: "",
          },
          {
            id: 2,
            serial: "2",
            studentId: "21203010",
            name: "Shahidul Alam",
            type: "Course Drop",
            description: "I want to drop this course",
            status: "Processing",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 3,
            serial: "3",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 4,
            serial: "4",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 5,
            serial: "5",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 6,
            serial: "6",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 7,
            serial: "7",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Add",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "",
            attachmentUrl: "123",
          },
          {
            id: 8,
            serial: "8",
            studentId: "22203010",
            name: "Shahidul Alam",
            type: "Course Drop",
            description: "I want to add this course",
            status: "Finished",
            requestDate: "5 Jan, 2023",
            stateUpdateDate: "10 Jan, 2023",
            remarks: "Done",
            attachmentUrl: "123",
          },
        ],
      };
    },
  },
});

export default authStore;
