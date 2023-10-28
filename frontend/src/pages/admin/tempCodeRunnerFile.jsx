  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success("User updated successfully!");
      refetch();
      navigate("/admin/userlist");
    } catch (err) {
        toast.error(err?data?.message || err.error);
    }
  };