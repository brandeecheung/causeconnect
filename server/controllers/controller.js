const { Project, Charity, User } = require('../models');
const { signToken } = require('../utils/auth');
const API = require('../utils/API');

module.exports = {
  // Fetch all projects
  async fetchAllProjects(req, res) {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ message: 'Error fetching projects' });
    }
  },

  // Fetch all organizations
  async fetchAllOrganizations(req, res) {
    try {
      const organizations = await Charity.find({});
      res.json(organizations);
    } catch (error) {
      console.error('Error fetching organizations:', error);
      res.status(500).json({ message: 'Error fetching organizations' });
    }
  },

  // Get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    try {
      const foundUser = await User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });

      if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' });
      }

      res.json(foundUser);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  },

  // Create a user, sign a token, and send it back
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  },

  // Login a user, sign a token, and send it back
  async login({ body }, res) {
    try {
      const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
      if (!user) {
        return res.status(400).json({ message: "Can't find this user" });
      }

      const correctPw = await user.isCorrectPassword(body.password);

      if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Error logging in user' });
    }
  },

  // Save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  async saveBook({ user, body }, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.error('Error saving book:', err);
      return res.status(400).json(err);
    }
  },

  // Remove a book from `savedBooks`
  async deleteBook({ user, params }, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Couldn't find user with this id!" });
      }
      return res.json(updatedUser);
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Error deleting book' });
    }
  },

  // Fetch all projects from GlobalGiving API
  async fetchAllOrgProjectsFromAPI(req, res) {
    try {
      const data = await fetchAllOrgProjects();
      res.json(data);
    } catch (error) {
      console.error('Error fetching projects from GlobalGiving API:', error);
      res.status(500).json({ message: 'Error fetching projects from GlobalGiving API' });
    }
  },

  // Fetch all organizations from GlobalGiving API
  async fetchAllOrganizationsFromAPI(req, res) {
    try {
      const data = await fetchAllOrganizations();
      res.json(data);
    } catch (error) {
      console.error('Error fetching organizations from GlobalGiving API:', error);
      res.status(500).json({ message: 'Error fetching organizations from GlobalGiving API' });
    }
  },
};