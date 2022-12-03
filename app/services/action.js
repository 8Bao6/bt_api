function action() {
    this.fetchUser = async function () {
        try {
            const res = await axios({
                url: "https://637b69996f4024eac20ce11d.mockapi.io/api/UserManagement",
                method: "GET",
            });
            return res.data;
        } catch (error) {
        }
    };

    this.fetchUserAdd = async function (user) {
        try {
            const res = await axios({
                url: "https://637b69996f4024eac20ce11d.mockapi.io/api/UserManagement",
                method: "POST",
                data: user,
            });
        } catch (error) {
            console.log(error);
        }
    };

    this.fetchUserDelete = async function (id) {
        try {
            const res = await axios({
                url: `https://637b69996f4024eac20ce11d.mockapi.io/api/UserManagement/${id}`,
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    };

    this.fetchUserEdit = async function (id) {
        try {
            const res = await axios({
                url: `https://637b69996f4024eac20ce11d.mockapi.io/api/UserManagement/${id}`,
                method: "GET",
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    this.fetchUserUpdate = async function (user) {
        try {
            const res = await axios({
                url: `https://637b69996f4024eac20ce11d.mockapi.io/api/UserManagement/${user.id}`,
                method: "PUT",
                data: user,
            });

        } catch (error) {
            console.log(error);
        }
    };

}
